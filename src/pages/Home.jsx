import { Link } from "react-router-dom";
import books from "../data/books";
import articles from "../data/articles";
import useReveal from "../hooks/useReveal";
import HomeMedia from "../components/HomeMedia";
import PdfCoverThumb from "../components/PdfCoverThumb";

function IntroSection() {
  const [ref, revealed] = useReveal();
  return (
    <section
      className={`intro-section vintage-reveal${revealed ? " show-vintage" : ""}`}
      ref={ref}
    >
      <div className="container">
        <p className="section-small-title">அறிமுகம்</p>
        <h2>மூதறிஞர் தமிழண்ணல்</h2>
        <div className="gold-line"></div>
        <p>
          தமிழண்ணல் என்று அன்போடு அழைக்கப்பட்ட முனைவர் இராம. பெரியகருப்பன்
          அவர்கள் புகழ்பெற்ற தமிழ் அறிஞர், எழுத்தாளர் மற்றும் ஆய்வாளர்
          ஆவார்.
        </p>
        <p>
          தமிழ் இலக்கியம், இலக்கணம், சங்க இலக்கியம் மற்றும் தமிழர் பண்பாடு
          ஆகிய துறைகளில் அவர் ஆற்றிய பணிகள் தமிழ் உலகில் என்றும்
          நினைவுகூரப்படுகின்றன.
        </p>
        <Link to="/about" className="read-more-link">
          மேலும் அறிக →
        </Link>
      </div>
    </section>
  );
}

const coverClasses = [
  "book-cover-one",
  "book-cover-two",
  "book-cover-three",
];

function HomeArticleTeaser() {
  const [ref, revealed] = useReveal();
  // Feature the real memorial article (matches thamizhannal.org's own
  // home page "கட்டுரை" section) rather than whichever article happens
  // to be first in the list.
  const featured =
    articles.find((a) => a.slug === "thamizhaaga-vaazhntha-annalukku-agavai-thonnooru") ||
    articles[0];
  if (!featured) return null;

  return (
    <section
      ref={ref}
      className={`intro-section vintage-reveal${
        revealed ? " show-vintage" : ""
      }`}
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-small-title">கட்டுரை</p>
          <h2>{featured.title}</h2>
          {featured.byline && (
            <p className="home-article-byline">
              {featured.byline.name}
              {featured.byline.designation && (
                <span> · {featured.byline.designation}</span>
              )}
            </p>
          )}
          <div className="gold-line center-line"></div>
        </div>

        <div className="home-article-teaser">
          <p>{featured.excerpt}</p>
          <Link
            to={`/articles/${featured.slug}`}
            className="read-more-link"
            style={{ marginTop: "14px", display: "inline-block" }}
          >
            தொடர்ந்து படிக்க →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BooksSection() {
  const [ref, revealed] = useReveal();
  const featured = books.slice(0, 3);

  return (
    <section
      className={`books-section vintage-reveal${revealed ? " show-vintage" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-small-title">படைப்புகள்</p>
          <h2>தேர்ந்தெடுக்கப்பட்ட நூல்கள்</h2>
          <div className="gold-line center-line"></div>
        </div>

        <div className="book-grid">
          {featured.map((book, index) => (
            <div className="book-card" key={book.id}>
              <div
                className={`book-cover book-cover-pdf ${coverClasses[index % coverClasses.length]}`}
              >
                <PdfCoverThumb pdfUrl={book.pdfUrl} title={book.title} />
              </div>

              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.categoryLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center-button">
          <Link to="/books" className="outline-button">
            அனைத்து நூல்களையும் பார்க்க
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="copper-hero-section">
        <div className="copper-hero-container">
          <div className="copper-top-ornament">
            ❖ &nbsp; தமிழ் அறிவுக் கருவூலம் &nbsp; ❖
          </div>

          <div className="copper-plate">
            <div className="copper-corner corner-one">✦</div>
            <div className="copper-corner corner-two">✦</div>
            <div className="copper-corner corner-three">✦</div>
            <div className="copper-corner corner-four">✦</div>

            <p className="copper-small-title">
              மூதறிஞர் • தமிழறிஞர் • எழுத்தாளர்
            </p>

            <div className="copper-symbol">த</div>

            <h1>
              தமிழாக வாழ்ந்த
              <br />
              தமிழண்ணல்
            </h1>

            <div className="copper-divider">
              <span></span>
              <b>❖</b>
              <span></span>
            </div>

            <p className="copper-description">
              தமிழ் மொழி, இலக்கியம், இலக்கணம் மற்றும் சங்க இலக்கியத்தில்
              அரிய பங்களிப்பு செய்த முனைவர் இராம. பெரியகருப்பன் அவர்களின்
              தமிழ் வாழ்வையும் படைப்புகளையும் பதிவு செய்யும் டிஜிட்டல்
              காப்பகம்.
            </p>

            <div className="copper-year-seal">
              <span>பிறப்பு</span>
              <strong>1928</strong>
              <b>❖</b>
              <strong>2015</strong>
              <span>நினைவு</span>
            </div>

            <Link to="/about" className="copper-button">
              காப்பகத்தைத் திறக்க
            </Link>

            <div className="hero-portrait-overlap">
              <img src="/images/thamizhannal-portrait.jpg" alt="மூதறிஞர் தமிழண்ணல்" />
            </div>
          </div>

          <p className="archive-id">
            தமிழ் மரபுக் காப்பகம் • பதிவு எண். TA-1928-2015
          </p>
        </div>
      </section>

      <IntroSection />
      <HomeMedia />
      <HomeArticleTeaser />
      <BooksSection />
    </>
  );
}
