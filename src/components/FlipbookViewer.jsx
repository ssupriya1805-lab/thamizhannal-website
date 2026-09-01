import { useEffect, useRef, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Page = forwardRef(({ src, pageNumber }, ref) => (
  <div className="flipbook-page" ref={ref}>
    {src ? (
      <img src={src} alt={`பக்கம் ${pageNumber}`} draggable={false} />
    ) : (
      <div className="flipbook-page-blank" />
    )}
    <span className="flipbook-page-number">{pageNumber}</span>
  </div>
));
Page.displayName = "Page";

export default function FlipbookViewer({ pdfUrl, title }) {
  const [pages, setPages] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | missing | error
  const flipBookRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    if (!pdfUrl) {
      setStatus("missing");
      return;
    }

    async function renderPdf() {
      try {
        setStatus("loading");

        // First check the file actually exists, so a not-yet-added
        // book shows a friendly "coming soon" state instead of an error.
        const head = await fetch(pdfUrl, { method: "HEAD" });
        if (!head.ok) {
          if (!cancelled) setStatus("missing");
          return;
        }

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const renderedPages = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.4 });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext("2d");

          await page.render({ canvasContext: context, viewport }).promise;
          renderedPages.push(canvas.toDataURL("image/jpeg", 0.85));
        }

        if (!cancelled) {
          setPages(renderedPages);
          setStatus("ready");
        }
      } catch (err) {
        console.error("PDF load failed:", err);
        if (!cancelled) setStatus("error");
      }
    }

    renderPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  if (status === "loading") {
    return (
      <div className="flipbook-status">
        <div className="flipbook-spinner"></div>
        <p>“{title}” புத்தகம் ஏற்றப்படுகிறது…</p>
      </div>
    );
  }

  if (status === "missing") {
    return (
      <div className="flipbook-status flipbook-missing">
        <p style={{ color: "#3a1f08", fontWeight: 600 }}>
          இந்த நூலின் PDF இன்னும் சேர்க்கப்படவில்லை.
        </p>
        <p className="flipbook-hint" style={{ color: "#5a4326" }}>
          சேர்க்க:{" "}
          <code
            style={{
              background: "#fff",
              color: "#3a1f08",
              padding: "2px 8px",
              borderRadius: "4px",
              border: "1px solid #d8c39a",
            }}
          >
            {pdfUrl}
          </code>{" "}
          என்ற பாதையில் PDF கோப்பைப் போடவும்.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flipbook-status flipbook-missing">
        <p style={{ color: "#3a1f08", fontWeight: 600 }}>
          இந்த PDF-ஐத் திறக்க முடியவில்லை. கோப்பு சரியானதா என்று
          சரிபார்க்கவும்.
        </p>
      </div>
    );
  }

  return (
    <div className="flipbook-wrap">
      <HTMLFlipBook
        width={420}
        height={594}
        size="stretch"
        minWidth={280}
        maxWidth={640}
        minHeight={400}
        maxHeight={900}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
        ref={flipBookRef}
      >
        {pages.map((src, index) => (
          <Page src={src} pageNumber={index + 1} key={index} />
        ))}
      </HTMLFlipBook>

      <div className="flipbook-controls">
        <button
          type="button"
          onClick={() => flipBookRef.current?.pageFlip()?.flipPrev()}
        >
          ← முந்தைய பக்கம்
        </button>
        <button
          type="button"
          onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
        >
          அடுத்த பக்கம் →
        </button>
      </div>
    </div>
  );
}