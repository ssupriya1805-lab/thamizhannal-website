import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: "art1",
    day: "12",
    month: "ஆக",
    year: "2026",
    type: "தமிழ் இலக்கியம்",
    readingTime: "ஆய்வுப் பதிவு • 5 நிமிட வாசிப்பு",
    title: "தமிழ் இலக்கியத்தில் அறத்தின் இடம்",
    excerpt:
      "சங்க இலக்கியம் மனித வாழ்வில் அறம், அன்பு மற்றும் ஒழுக்கம் ஆகியவற்றுக்கு வழங்கிய முக்கியத்துவத்தை எடுத்துரைக்கும் கட்டுரை.",
  },
  {
    id: "art2",
    day: "29",
    month: "ஜூலை",
    year: "2026",
    type: "தமிழ் இலக்கணம்",
    readingTime: "ஆய்வுப் பதிவு • 6 நிமிட வாசிப்பு",
    title: "தொல்காப்பியத்தின் மொழியியல் பார்வை",
    excerpt:
      "தமிழ் இலக்கண மரபின் அடிப்படையாக விளங்கும் தொல்காப்பியம், மொழியியல் பார்வையில் எவ்வளவு முக்கியமானது என்பதை விளக்கும் கட்டுரை.",
  },
  {
    id: "art3",
    day: "15",
    month: "ஜூலை",
    year: "2026",
    type: "சங்க இலக்கியம்",
    readingTime: "ஆய்வுப் பதிவு • 4 நிமிட வாசிப்பு",
    title: "அகநானூறு காட்டும் அக வாழ்க்கை",
    excerpt:
      "அகநானூறு பாடல்களில் இடம்பெறும் காதல், பிரிவு, காத்திருப்பு மற்றும் இயற்கை சார்ந்த வாழ்க்கைக் காட்சிகளைப் பற்றிய பதிவு.",
  },
  {
    id: "art4",
    day: "02",
    month: "ஜூன்",
    year: "2026",
    type: "தமிழ்க் கல்வி",
    readingTime: "ஆய்வுப் பதிவு • 7 நிமிட வாசிப்பு",
    title: "கல்வியும் தாய்மொழியும்",
    excerpt:
      "மாணவர்களின் சிந்தனைத் திறன், புரிதல் மற்றும் பண்பாட்டு உணர்வைத் தாய்மொழி வழிக்கல்வி வளர்க்கும் விதம் பற்றிய கட்டுரை.",
  },
];

export default function Articles() {
  const [query, setQuery] = useState("");

  const visibleArticles = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter((a) =>
      `${a.title} ${a.excerpt} ${a.type}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="page-banner articles-page-banner">
        <div className="container">
          <p>தமிழ் இலக்கியம் மற்றும் ஆய்வியல் சிந்தனைகள்</p>
          <h1>கட்டுரைகள்</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>கட்டுரைகள்</span>
          </div>

          <div className="articles-banner-intro">
            <p className="section-small-title">தமிழ் சிந்தனைகள்</p>
            <h2>இலக்கியமும் ஆய்வும்</h2>
            <div className="gold-line center-line"></div>
            <p className="articles-page-intro">
              தமிழ் மொழியின் செழுமை, சங்க இலக்கியத்தின் சிறப்பு,
              தொல்காப்பியத்தின் இலக்கண மரபு மற்றும் தமிழர் பண்பாடு
              ஆகியவற்றை அறிமுகப்படுத்தும் மாதிரிக் கட்டுரைகள்.
            </p>
          </div>
        </div>
      </section>

      <section className="articles-page-section">
        <div className="container">
          <div className="article-archive-tools">
            <p>
              <span>காப்பகப் பதிவுகள்</span>
              மொத்தம் {String(articles.length).padStart(2, "0")} கட்டுரைகள்
            </p>

            <div className="article-search-box">
              <input
                type="search"
                id="articleSearch"
                placeholder="கட்டுரையைத் தேடுக..."
                aria-label="கட்டுரையைத் தேடுக"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="articles-layout">
            <main className="article-list">
              {visibleArticles.length === 0 && (
                <p style={{ padding: "20px 0" }}>
                  பொருந்தும் கட்டுரைகள் இல்லை.
                </p>
              )}

              {visibleArticles.map((article) => (
                <article className="article-list-card" key={article.id}>
                  <div className="article-date-box">
                    <strong>{article.day}</strong>
                    <span>{article.month}</span>
                    <small>{article.year}</small>
                  </div>

                  <div className="article-list-content">
                    <p className="article-type">{article.type}</p>
                    <p className="article-reading-time">{article.readingTime}</p>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <button className="article-read-button">
                      தொடர்ந்து படிக்க →
                    </button>
                  </div>
                </article>
              ))}
            </main>

            <aside className="articles-sidebar">
              <div className="sidebar-box">
                <h3>கட்டுரை வகைகள்</h3>
                <a href="#!">தமிழ் இலக்கியம் <span>01</span></a>
                <a href="#!">சங்க இலக்கியம் <span>01</span></a>
                <a href="#!">தமிழ் இலக்கணம் <span>01</span></a>
                <a href="#!">தமிழ்க் கல்வி <span>01</span></a>
              </div>

              <div className="sidebar-box quote-box">
                <p>"கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக."</p>
                <span>— திருக்குறள்</span>
              </div>

              <div className="sidebar-box">
                <h3>விரைவு இணைப்புகள்</h3>
                <Link to="/about">தமிழண்ணல் தமிழ்வாழ்வு <span>→</span></Link>
                <Link to="/books">தமிழண்ணல் நூல்கள் <span>→</span></Link>
                <Link to="/gallery">புகைப்படத் தொகுப்பு <span>→</span></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
