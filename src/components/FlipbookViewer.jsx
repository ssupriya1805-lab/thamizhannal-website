import { useEffect, useRef, useState, forwardRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Page = forwardRef(({ src, pageNumber }, ref) => (
  <div className="flipbook-page" ref={ref}>
    <div className="flipbook-page-shade" />
    {src ? (
      <img src={src} alt={`பக்கம் ${pageNumber}`} draggable={false} />
    ) : (
      <div className="flipbook-page-blank" />
    )}
    <span className="flipbook-page-number">{pageNumber}</span>
  </div>
));
Page.displayName = "Page";

/**
 * Renders a PDF as a page-turning flipbook. If the PDF can't be fetched
 * for rendering (e.g. the host doesn't send CORS headers, which blocks
 * pdf.js from reading the bytes even though the file itself is public),
 * this calls onFail so the parent can fall back to a plain embed instead
 * of showing a permanently broken flipbook.
 */
export default function FlipbookViewer({ pdfUrl, title, onFail }) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const flipBookRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function renderPdf() {
      try {
        setLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const renderedPages = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.5 });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext("2d");

          await page.render({ canvasContext: context, viewport }).promise;
          renderedPages.push(canvas.toDataURL("image/jpeg", 0.85));
        }

        if (!cancelled) {
          setPages(renderedPages);
          setLoading(false);
        }
      } catch (err) {
        console.error("Flipbook render failed:", err);
        if (!cancelled) onFail?.();
      }
    }

    renderPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl, onFail]);

  const goPrev = useCallback(
    () => flipBookRef.current?.pageFlip()?.flipPrev(),
    []
  );
  const goNext = useCallback(
    () => flipBookRef.current?.pageFlip()?.flipNext(),
    []
  );

  // Arrow-key navigation while the flipbook is on screen.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape" && fullscreen) setFullscreen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext, fullscreen]);

  if (loading) {
    return (
      <div className="pdf-viewer-loading">
        <div className="pdf-viewer-spinner"></div>
        <p>"{title}" புத்தகம் ஏற்றப்படுகிறது…</p>
      </div>
    );
  }

  return (
    <div
      className={`flipbook-wrap${fullscreen ? " flipbook-fullscreen" : ""}`}
      ref={wrapRef}
    >
      <div className="flipbook-stage">
        <HTMLFlipBook
          width={420}
          height={594}
          size="stretch"
          minWidth={260}
          maxWidth={720}
          minHeight={380}
          maxHeight={1000}
          showCover={true}
          mobileScrollSupport={true}
          className="flipbook"
          ref={flipBookRef}
          onFlip={(e) => setCurrent(e.data + 1)}
        >
          {pages.map((src, index) => (
            <Page src={src} pageNumber={index + 1} key={index} />
          ))}
        </HTMLFlipBook>
      </div>

      <div className="flipbook-controls">
        <button type="button" onClick={goPrev} aria-label="முந்தைய பக்கம்">
          ← முந்தைய பக்கம்
        </button>

        <span className="flipbook-page-count">
          பக்கம் {current} / {pages.length}
        </span>

        <button type="button" onClick={goNext} aria-label="அடுத்த பக்கம்">
          அடுத்த பக்கம் →
        </button>

        <button
          type="button"
          className="flipbook-fullscreen-btn"
          onClick={() => setFullscreen((f) => !f)}
          aria-label={fullscreen ? "முழுத்திரையை விட்டு வெளியேறு" : "முழுத்திரையில் திற"}
        >
          {fullscreen ? "✕ மூடு" : "⤢ முழுத்திரை"}
        </button>
      </div>
    </div>
  );
}
