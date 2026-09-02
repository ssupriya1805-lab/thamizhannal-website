import { useEffect, useState } from "react";
import FlipbookViewer from "./FlipbookViewer";

/**
 * Book viewer: tries to show a real page-turning flipbook first
 * (rendered from the PDF with pdf.js). If that can't load — e.g. the
 * file host doesn't send CORS headers, which silently blocks pdf.js
 * from reading the bytes even though the file opens fine directly —
 * it falls back to a clean embedded PDF viewer instead of breaking.
 */
export default function PdfViewer({ pdfUrl, title }) {
  const isExternal = /^https?:\/\//i.test(pdfUrl || "");
  const [status, setStatus] = useState(
    !pdfUrl ? "missing" : isExternal ? "ready" : "checking"
  );
  const [mode, setMode] = useState("flipbook"); // flipbook | embed

  useEffect(() => {
    let cancelled = false;
    setMode("flipbook");

    if (!pdfUrl) {
      setStatus("missing");
      return;
    }

    if (isExternal) {
      setStatus("ready");
      return;
    }

    setStatus("checking");

    fetch(pdfUrl, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        setStatus(res.ok ? "ready" : "missing");
      })
      .catch(() => {
        if (!cancelled) setStatus("missing");
      });

    return () => {
      cancelled = true;
    };
  }, [pdfUrl, isExternal]);

  const downloadName = `${title || "book"}.pdf`;

  return (
    <div className="pdf-viewer-card">
      <div className="pdf-viewer-titlebar">
        <h3>{title}</h3>
        {status === "ready" && (
          <div className="pdf-viewer-buttons">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              ↗ புதிய சாளரத்தில்
            </a>
            <a href={pdfUrl} download={downloadName} className="hero-button">
              ↓ பதிவிறக்கம்
            </a>
          </div>
        )}
      </div>

      <div className="pdf-viewer-frame-wrap">
        {status === "checking" && (
          <div className="pdf-viewer-loading">
            <div className="pdf-viewer-spinner"></div>
            <p>PDF சரிபார்க்கப்படுகிறது…</p>
          </div>
        )}

        {status === "missing" && (
          <div className="pdf-viewer-missing">
            <p>இந்த நூலின் PDF இன்னும் சேர்க்கப்படவில்லை.</p>
            <p style={{ fontSize: "0.85rem" }}>
              சேர்க்க: <code>{pdfUrl || "/books/<file>.pdf"}</code> என்ற
              பாதையில் PDF கோப்பைப் போடவும்.
            </p>
          </div>
        )}

        {status === "ready" && mode === "flipbook" && (
          <FlipbookViewer
            pdfUrl={pdfUrl}
            title={title}
            onFail={() => setMode("embed")}
          />
        )}

        {status === "ready" && mode === "embed" && (
          <iframe
            className="pdf-viewer-frame"
            src={`${pdfUrl}#toolbar=1`}
            title={title}
          />
        )}
      </div>

      {status === "ready" && (
        <p className="pdf-viewer-footnote">
          {mode === "flipbook"
            ? "பக்கத்தை புரட்ட, அதன் ஓரத்தைச் சொடுக்கவும் அல்லது மேலே உள்ள பொத்தான்களைப் பயன்படுத்தவும்."
            : "PDF இங்கே திறக்கவில்லை எனில், மேலே உள்ள \"புதிய சாளரத்தில்\" பொத்தானைப் பயன்படுத்தவும், அல்லது \"பதிவிறக்கம்\" செய்து ஆஃப்லைனில் படிக்கவும்."}
        </p>
      )}
    </div>
  );
}
