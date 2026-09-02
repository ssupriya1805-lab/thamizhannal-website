import { useState } from "react";
import { Link } from "react-router-dom";
import awardSections from "../data/awards";
import Lightbox from "../components/Lightbox";
import useReveal from "../hooks/useReveal";

function AwardCard({ item, onOpen }) {
  const [ref, revealed] = useReveal();

  return (
    <article
      ref={ref}
      className={`memory-card vintage-memory-reveal${
        revealed ? " show-memory" : ""
      }`}
      style={
        item.image
          ? {
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      onClick={() => item.image && onOpen(item)}
      role="button"
      tabIndex={0}
    >
      {item.image ? (
        <div className="memory-overlay">
          <p>{item.tag}</p>
          <h3>{item.title || item.caption}</h3>
        </div>
      ) : (
        <div className="image-slot-empty">
          <span>
            {item.tag}
            <br />
            படம் இன்னும் இல்லை
          </span>
        </div>
      )}
    </article>
  );
}

export default function Awards() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="page-banner gallery-page-banner">
        <div className="container">
          <p>தமிழ் மொழிக்காக ஆற்றிய அரிய பணிகள்</p>
          <h1>விருதுகள்</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>விருதுகள்</span>
          </div>

          <div className="gallery-banner-intro">
            <p className="section-small-title">அங்கீகாரங்கள்</p>
            <h2>தமிழ்ப்பணிக்குக் கிடைத்த பெருமைகள்</h2>
            <div className="gold-line center-line"></div>
            <p className="gallery-intro">
              தமிழ் மொழி, இலக்கியம் மற்றும் ஆய்வுப் பணிக்காக தமிழண்ணல்
              அவர்கள் பெற்ற பாராட்டுகளையும், உலகத் தமிழர் அங்கீகாரங்களையும்
              நினைவுகூரும் தொகுப்பு.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-page-section">
        <div className="container">
          {awardSections.map((section) => (
            <div className="gallery-subsection" key={section.id}>
              <div className="section-heading">
                <h2>{section.title}</h2>
                <div className="gold-line center-line"></div>
              </div>

              <div className="gallery-page-grid">
                {section.items.map((item) => (
                  <AwardCard item={item} onOpen={setActive} key={item.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="memory-quote-section">
        <div className="container memory-quote-content">
          <p>"தமிழின் வளர்ச்சியே தமிழரின் பெருமை."</p>
          <span>— தமிழண்ணல் நினைவு</span>
        </div>
      </section>

      <div className="center-button" style={{ margin: "10px 0 60px" }}>
        <Link to="/gallery" className="outline-button">
          ← வாழ்க்கைப் பயணத்திற்குத் திரும்ப
        </Link>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}
