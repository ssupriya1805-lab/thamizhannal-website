import { useParams, Link, Navigate } from "react-router-dom";
import books from "../data/books";
import PdfViewer from "../components/PdfViewer";
import PdfCoverThumb from "../components/PdfCoverThumb";

export default function BookReader() {
  const { slug } = useParams();
  const index = books.findIndex((b) => b.slug === slug);
  const book = index !== -1 ? books[index] : null;

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const prevBook = index > 0 ? books[index - 1] : null;
  const nextBook = index < books.length - 1 ? books[index + 1] : null;

  return (
    <>
      {/* Dark banner — same look as every other page banner on the site,
          so the breadcrumb text is always readable (light gold on dark). */}
      <section className="page-banner book-reader-page-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">முகப்பு</Link>
            <span>›</span>
            <Link to="/books">நூல்கள்</Link>
            <span>›</span>
            <span>{book.title}</span>
          </div>

          <div className="book-reader-hero">
            <div className="book-reader-hero-cover">
              <PdfCoverThumb
                className="book-cover-thumb"
                pdfUrl={book.pdfUrl}
                title={book.title}
              />
            </div>

            <div className="book-reader-hero-info">
              {book.categoryLabel && (
                <p className="book-reader-hero-tag">{book.categoryLabel}</p>
              )}
              <h1>{book.title}</h1>
              {book.titleEn && (
                <p className="book-reader-title-en">{book.titleEn}</p>
              )}
              {book.author && (
                <p className="book-reader-author">
                  ஆசிரியர்: {book.author}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="book-reader-main">
        <div className="container">
          <div className="book-reader-meta">
            <div className="gold-line center-line"></div>
            {book.description && <p>{book.description}</p>}

            <div className="book-reader-actions">
              <Link to="/books" className="outline-button">
                ← நூல்களுக்கு திரும்ப
              </Link>
            </div>
          </div>

          <PdfViewer pdfUrl={book.pdfUrl} title={book.title} />

          <div className="book-nav-row">
            {prevBook ? (
              <Link to={`/books/${prevBook.slug}`} className="book-nav-card">
                <small>← முந்தைய நூல்</small>
                <p>{prevBook.title}</p>
              </Link>
            ) : (
              <div style={{ flex: "1 1 260px" }} />
            )}

            {nextBook ? (
              <Link
                to={`/books/${nextBook.slug}`}
                className="book-nav-card book-nav-next"
              >
                <small>அடுத்த நூல் →</small>
                <p>{nextBook.title}</p>
              </Link>
            ) : (
              <div style={{ flex: "1 1 260px" }} />
            )}
          </div>

          <div className="center-button" style={{ marginTop: "34px" }}>
            <Link to="/books" className="outline-button">
              ← அனைத்து நூல்களுக்கும் திரும்ப
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
