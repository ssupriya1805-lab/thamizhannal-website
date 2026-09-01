import { Link } from "react-router-dom";
import books, { categories } from "../data/books";

const coverClasses = ["cover-maroon", "cover-brown", "cover-green", "cover-blue", "cover-purple", "cover-orange"];

function BookCard({ book, index }) {
  return (
    <article className="full-book-card" key={book.id}>
      <Link to={`/books/${book.slug}`} style={{ display: "block" }}>
        <div
          className={`full-book-cover ${coverClasses[index % coverClasses.length]}`}
          style={{ backgroundImage: `url(${book.coverImage})` }}
        >
          <span>{book.categoryLabel}</span>
          <strong>{book.title}</strong>
          <small>தமிழண்ணல்</small>
        </div>
      </Link>

      <div className="full-book-content">
        <p className="book-category">{book.categoryLabel}</p>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <Link to={`/books/${book.slug}`} className="book-read-button">
          புத்தகத்தைப் படிக்க
        </Link>
      </div>
    </article>
  );
}

export default function Books() {
  const booksByCategory = categories.map((cat) => ({
    ...cat,
    items: books.filter((book) => book.category === cat.id),
  }));

  return (
    <>
      <section className="page-banner books-page-banner">
        <div className="container">
          <p>மூதறிஞர் தமிழண்ணல் அவர்களின் படைப்புகள்</p>
          <h1>நூல்கள்</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>நூல்கள்</span>
          </div>

          <div className="books-banner-intro">
            <p className="section-small-title">தமிழ் நூலாக்கம்</p>
            <h2>தமிழண்ணல் இயற்றிய நூல்கள்</h2>
            <div className="gold-line center-line"></div>
            <p className="books-intro-text">
              தமிழ் இலக்கியம், தொல்காப்பியம், திருக்குறள், இலக்கணம்,
              மொழியியல், தமிழர் பண்பாடு மற்றும் திறனாய்வு போன்ற துறைகளில்
              தமிழண்ணல் அவர்கள் பல நூல்களை எழுதியுள்ளார். புத்தகத்தின்
              அட்டையை சொடுக்கி புரட்டிப் படிக்கலாம்.
            </p>
          </div>
        </div>
      </section>

      <section className="books-intro-section">
        <div className="container">
          <div className="book-filter">
            {booksByCategory.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="filter-button">
                {cat.label} ({cat.items.length})
              </a>
            ))}
          </div>

          {booksByCategory.map((cat) => (
            <div key={cat.id} id={cat.id} style={{ marginTop: "44px" }}>
              <div
                className="section-heading"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", textAlign: "left" }}
              >
                <h2 style={{ margin: 0 }}>{cat.label}</h2>
                <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>{cat.items.length} நூல்கள்</span>
              </div>
              <div className="gold-line"></div>

              {cat.items.length > 0 ? (
                <div className="all-books-grid">
                  {cat.items.map((book, index) => (
                    <BookCard book={book} index={index} key={book.id} />
                  ))}
                </div>
              ) : (
                <p style={{ padding: "16px 0", opacity: 0.7 }}>
                  இந்தப் பிரிவில் நூல்கள் விரைவில் சேர்க்கப்படும்.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="book-note-section">
        <div className="container book-note-box">
          <div>
            <p className="section-small-title">குறிப்பு</p>
            <h2>தமிழ் நூல்களைப் பாதுகாப்போம்</h2>
            <p>
              இப்பக்கத்தில் உள்ள நூல் விவரங்கள் கல்வித் திட்டத்திற்கான
              மாதிரி வடிவமைப்பாக வழங்கப்பட்டுள்ளன.
            </p>
          </div>

          <Link to="/contact" className="hero-button">தொடர்புக்கு</Link>
        </div>
      </section>
    </>
  );
}