import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

export default function Articles() {
  const [query, setQuery] = useState("");

  const visibleArticles = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter((a) =>
      `${a.title} ${a.excerpt} ${a.type}`.toLowerCase().includes(q)
    );
  }, [query]);

  // "கட்டுரை வகைகள்" பட்டியலில் உள்ள எண்ணிக்கைகள் — articles.js-ல் உள்ள
  // ஒவ்வொரு கட்டுரையின் type-ஐ வைத்தே தானாகக் கணக்கிடப்படுகின்றன, எனவே
  // புதிய கட்டுரை சேர்த்தாலோ நீக்கினாலோ இங்கு தட்டச்சு செய்ய வேண்டியதில்லை.
  const typeCounts = useMemo(() => {
    const counts = new Map();
    articles.forEach((a) => {
      counts.set(a.type, (counts.get(a.type) || 0) + 1);
    });
    return Array.from(counts.entries());
  }, []);

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
                    <Link
                      to={`/articles/${article.slug}`}
                      className="article-read-button"
                    >
                      தொடர்ந்து படிக்க →
                    </Link>
                  </div>
                </article>
              ))}
            </main>

            <aside className="articles-sidebar">
              <div className="sidebar-box">
                <h3>கட்டுரை வகைகள்</h3>
                {typeCounts.map(([type, count]) => (
                  <a
                    href="#!"
                    key={type}
                    onClick={(e) => {
                      e.preventDefault();
                      setQuery(type);
                    }}
                  >
                    {type} <span>{String(count).padStart(2, "0")}</span>
                  </a>
                ))}
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
