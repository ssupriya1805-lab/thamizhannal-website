import { useParams, Link, Navigate } from "react-router-dom";
import books from "../data/books";
import FlipbookViewer from "../components/FlipbookViewer";

export default function BookReader() {
  const { slug } = useParams();
  const index = books.findIndex((b) => b.slug === slug);
  const book = books[index];

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const prevBook = index > 0 ? books[index - 1] : null;
  const nextBook = index < books.length - 1 ? books[index + 1] : null;

  return (
    <section className="book-reader-section">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">முகப்பு</Link>
          <span>›</span>
          <Link to="/books">நூல்கள்</Link>
          <span>›</span>
          <span>{book.title}</span>
        </div>

        {/* ---- Book header: cover + category pill + title + author + actions ---- */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            alignItems: "flex-start",
            margin: "22px 0 32px",
          }}
        >
          <img
            src={book.coverImage}
            alt={book.title}
            style={{
              width: "150px",
              height: "210px",
              objectFit: "cover",
              borderRadius: "6px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              flexShrink: 0,
            }}
          />

          <div style={{ flex: "1 1 320px", minWidth: "260px" }}>
            <span
              style={{
                display: "inline-block",
                background: "#f4e3c3",
                color: "#7a4a12",
                padding: "5px 16px",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              {book.categoryLabel}
            </span>

            <h1 style={{ margin: "0 0 6px" }}>{book.title}</h1>

            {book.titleEn && (
              <p style={{ fontStyle: "italic", opacity: 0.7, margin: "0 0 10px" }}>
                {book.titleEn}
              </p>
            )}

            {book.author && (
              <p style={{ margin: "0 0 14px" }}>ஆசிரியர்: {book.author}</p>
            )}

            {book.description && (
              <p style={{ margin: "0 0 20px", maxWidth: "560px" }}>
                {book.description}
              </p>
            )}

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={book.pdfUrl} download className="hero-button">
                ↓ பதிவிறக்கம்
              </a>
              <Link to="/books" className="outline-button">
                ← நூல்களுக்கு திரும்ப
              </Link>
            </div>
          </div>
        </div>

        {/* ---- Viewer toolbar ---- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            background: "#faf3e6",
            padding: "14px 20px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <strong style={{ color: "#3a1f08" }}>{book.title}</strong>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              ↗ புதிய சாளரத்தில்
            </a>
            <a href={book.pdfUrl} download className="hero-button">
              ↓ பதிவிறக்கம்
            </a>
          </div>
        </div>

        <FlipbookViewer pdfUrl={book.pdfUrl} title={book.title} />

        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#5a4326",
            margin: "14px 0 34px",
          }}
        >
          PDF திறக்கவில்லை எனில், மேலே உள்ள &quot;புதிய சாளரத்தில்&quot;
          பொத்தானைப் பயன்படுத்தவும், அல்லது &quot;பதிவிறக்கம்&quot; செய்து
          ஆஃப்லைனில் படிக்கவும்.
        </p>

        {/* ---- Prev / Next book navigation ---- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            margin: "20px 0 40px",
          }}
        >
          {prevBook ? (
            <Link
              to={`/books/${prevBook.slug}`}
              style={{
                flex: "1 1 260px",
                padding: "16px 20px",
                background: "#faf3e6",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#3a1f08",
              }}
            >
              <small style={{ opacity: 0.75 }}>← முந்தைய நூல்</small>
              <p style={{ margin: "6px 0 0", fontWeight: 600 }}>
                {prevBook.title}
              </p>
            </Link>
          ) : (
            <div style={{ flex: "1 1 260px" }} />
          )}

          {nextBook ? (
            <Link
              to={`/books/${nextBook.slug}`}
              style={{
                flex: "1 1 260px",
                padding: "16px 20px",
                background: "#faf3e6",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#3a1f08",
                textAlign: "right",
              }}
            >
              <small style={{ opacity: 0.75 }}>அடுத்த நூல் →</small>
              <p style={{ margin: "6px 0 0", fontWeight: 600 }}>
                {nextBook.title}
              </p>
            </Link>
          ) : (
            <div style={{ flex: "1 1 260px" }} />
          )}
        </div>

        <div className="center-button">
          <Link to="/books" className="outline-button">
            ← அனைத்து நூல்களுக்கும் திரும்ப
          </Link>
        </div>
      </div>
    </section>
  );
}
