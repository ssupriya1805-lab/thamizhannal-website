import { useState } from "react";
import { Link } from "react-router-dom";
import awardSections, { legacyContributions } from "../data/awards";
import Lightbox from "../components/Lightbox";
import useReveal from "../hooks/useReveal";

function AwardCard({ item, onOpen }) {
  const [ref, revealed] = useReveal();
  return (
    <article
      ref={ref}
      className={`memory-card vintage-memory-reveal${revealed ? " show-memory" : ""}`}
      style={item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
    >
      <div className="memory-overlay">
        <p>{item.tag}</p>
        <h3>{item.title || item.caption}</h3>
      </div>
    </article>
  );
}

function LegacyCard({ item }) {
  const [ref, revealed] = useReveal();
  return (
    <div ref={ref} className={`contribution-card about-vintage-reveal${revealed ? " show-about-vintage" : ""}`}>
      <span>{item.num}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}

export default function Awards() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="page-banner awards-page-banner">
        <div className="container">
          <p>தமிழ் மொழிக்காக ஆற்றிய அரிய பணிகள்</p>
          <h1>விருதுகளும் பங்களிப்புகளும்</h1>
          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>விருதுகள்</span>
          </div>
        </div>
      </section>

      {awardSections.map((section) => (
        <section className="gallery-page-section" key={section.id}>
          <div className="container">
            <div className="section-heading">
              <p className="section-small-title">{section.smallTitle}</p>
              <h2>{section.title}</h2>
              <div className="gold-line center-line"></div>
            </div>

            <div className="gallery-page-grid">
              {section.items.map((item) => (
                <AwardCard item={item} onOpen={setActive} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="contribution-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-small-title">நிலைத்த பணிகள்</p>
            <h2>தமிழுக்கு அவர் விட்டுச் சென்ற மரபு</h2>
            <div className="gold-line center-line"></div>
          </div>

          <div className="contribution-grid">
            {legacyContributions.map((item) => (
              <LegacyCard item={item} key={item.num} />
            ))}
          </div>
        </div>
      </section>

      <section className="memory-quote-section">
        <div className="container memory-quote-content">
          <p>"தமிழின் வளர்ச்சியே தமிழரின் பெருமை."</p>
          <span>— தமிழண்ணல் நினைவு</span>
        </div>
      </section>

      <div className="center-button">
        <Link to="/gallery" className="outline-button">← வாழ்க்கைப் பயணத்திற்குத் திரும்ப</Link>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}