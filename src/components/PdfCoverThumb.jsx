import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// Cache rendered covers so the same book isn't re-rendered on every
// page (Home + Books list + Book reader can all show the same cover).
const coverCache = new Map();

/**
 * Shows the PDF's own first page as the book's cover — no separate
 * cover .jpg needed. Falls back to a plain category-coloured card
 * (with the title on it) if the PDF isn't reachable yet.
 */
export default function PdfCoverThumb({ pdfUrl, title, className }) {
  const [src, setSrc] = useState(() => coverCache.get(pdfUrl) || null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!pdfUrl) {
      setFailed(true);
      return;
    }

    if (coverCache.has(pdfUrl)) {
      setSrc(coverCache.get(pdfUrl));
      return;
    }

    let cancelled = false;

    async function renderCover() {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 0.6 });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext("2d");

        await page.render({ canvasContext: context, viewport }).promise;
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);

        if (!cancelled) {
          coverCache.set(pdfUrl, dataUrl);
          setSrc(dataUrl);
        }
      } catch (err) {
        if (!cancelled) setFailed(true);
      }
    }

    renderCover();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  if (src) {
    return (
      <img
        src={src}
        alt={title}
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }

  return (
    <div className={`${className || ""} pdf-cover-placeholder`}>
      <span>{title}</span>
    </div>
  );
}
