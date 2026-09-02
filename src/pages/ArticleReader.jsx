import { useParams, Link, Navigate } from "react-router-dom";
import articles from "../data/articles";

// Renders one item of article.body. Each item can be:
//  - a plain string            -> normal paragraph
//  - { type: "poem", lines }   -> centred verse block
//  - { type: "quote", text, cite } -> indented quotation with a source line
function ArticleBlock({ block, index }) {
  if (typeof block === "string") {
    return (
      <p className="article-paragraph" key={index}>
        {block}
      </p>
    );
  }

  if (block.type === "poem") {
    return (
      <blockquote className="article-poem-block" key={index}>
        {block.lines.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </blockquote>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="article-quote-block" key={index}>
        <p>{block.text}</p>
        {block.cite && <cite>— {block.cite}</cite>}
      </blockquote>
    );
  }

  if (block.type === "heading") {
    return (
      <h3 className="article-subheading" key={index}>
        {block.text}
      </h3>
    );
  }

  return null;
}

export default function ArticleReader() {
  const { slug } = useParams();
  const index = articles.findIndex((a) => a.slug === slug);
  const article = index !== -1 ? articles[index] : null;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const prevArticle = index > 0 ? articles[index - 1] : null;
  const nextArticle = index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <>
      <section className="page-banner articles-page-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">முகப்பு</Link>
            <span>›</span>
            <Link to="/articles">கட்டுரைகள்</Link>
            <span>›</span>
            <span>{article.title}</span>
          </div>

          <p>{article.type}</p>
          <h1>{article.title}</h1>
          {article.byline && (
            <div className="article-byline-row">
              {article.portrait && (
                <img
                  className="article-byline-avatar"
                  src={article.portrait}
                  alt={article.byline.name}
                />
              )}
              <p className="article-byline">
                {article.byline.name}
                {article.byline.designation && (
                  <span> · {article.byline.designation}</span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="articles-page-section">
        <div className="container">
          <div className="articles-layout">
            <main className="article-list">
              <article
                className="article-list-card article-reader-body"
                style={{ display: "block" }}
              >
                <p className="article-reading-time">
                  {article.day} {article.month} {article.year} •{" "}
                  {article.readingTime}
                </p>

                <div className="article-content">
                  {article.body.map((block, i) => (
                    <ArticleBlock block={block} index={i} key={i} />
                  ))}
                </div>
              </article>

              <div className="book-nav-row">
                {prevArticle ? (
                  <Link
                    to={`/articles/${prevArticle.slug}`}
                    className="book-nav-card"
                  >
                    <small>← முந்தைய கட்டுரை</small>
                    <p>{prevArticle.title}</p>
                  </Link>
                ) : (
                  <div style={{ flex: "1 1 260px" }} />
                )}

                {nextArticle ? (
                  <Link
                    to={`/articles/${nextArticle.slug}`}
                    className="book-nav-card book-nav-next"
                  >
                    <small>அடுத்த கட்டுரை →</small>
                    <p>{nextArticle.title}</p>
                  </Link>
                ) : (
                  <div style={{ flex: "1 1 260px" }} />
                )}
              </div>

              <div className="center-button" style={{ marginTop: "30px" }}>
                <Link to="/articles" className="outline-button">
                  ← அனைத்து கட்டுரைகளுக்கும் திரும்ப
                </Link>
              </div>
            </main>

            <aside className="articles-sidebar">
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
