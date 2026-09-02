import { useState } from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import memories from "../data/remembrance";
import Lightbox from "../components/Lightbox";

const tributes = [
  {
    icon: "❖",
    title: "ஓர் ஆசானின் நினைவு",
    text: "மாணவர்களுக்கும் ஆய்வாளர்களுக்கும் வழிகாட்டியாக விளங்கிய அவரது கல்விப் பணி, இன்றும் தமிழாய்வுத் துறையில் வழி விளக்காக நிற்கிறது.",
  },
  {
    icon: "✦",
    title: "நூல் மரபு",
    text: "அவர் எழுதிய நூல்களும் ஆய்வுக் கட்டுரைகளும், தமிழ் இலக்கியப் பாரம்பரியத்தை அடுத்த தலைமுறைக்கு எடுத்துச் செல்லும் அரிய சொத்துகள்.",
  },
  {
    icon: "❖",
    title: "தமிழ் உணர்வு",
    text: "தாய்மொழியின் மீதான அவரது அயராத பற்று, பல தலைமுறை தமிழ் மாணவர்களுக்கு இன்றும் உத்வேகமாக இருக்கிறது.",
  },
];

function TributeCard({ item }) {
  const [ref, revealed] = useReveal();
  return (
    <div
      ref={ref}
      className={`remembrance-tribute-card about-vintage-reveal${
        revealed ? " show-about-vintage" : ""
      }`}
    >
      <span>{item.icon}</span>
      <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}

function MemoryCard({ item, onOpen }) {
  const [ref, revealed] = useReveal();
  return (
    <article
      ref={ref}
      className={`memory-card vintage-memory-reveal${
        revealed ? " show-memory" : ""
      }`}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
    >
      <div className="memory-overlay">
        <p>நினைவேந்தல்</p>
        <h3>{item.caption}</h3>
        <span style={{ fontSize: "0.8rem", opacity: 0.85 }}>
          பெரிதாக்க சொடுக்கவும் ↗
        </span>
      </div>
    </article>
  );
}

export default function Remembrance() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="page-banner gallery-page-banner">
        <div className="container">
          <p>29 டிசம்பர் 2015</p>
          <h1>நினைவேந்தல்</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>நினைவேந்தல்</span>
          </div>

          <div className="gallery-banner-intro">
            <p className="section-small-title">என்றும் நினைவில்</p>
            <h2>தமிழுக்காக வாழ்ந்த ஒரு உயிர்</h2>
            <div className="gold-line center-line"></div>
            <p className="gallery-intro">
              மூதறிஞர் தமிழண்ணல் (இராம. பெரியகருப்பன்) அவர்கள் 29 டிசம்பர்
              2015 அன்று மறைந்தாலும், தமிழ் மொழிக்கும் இலக்கியத்திற்கும்
              அவர் ஆற்றிய பணி என்றும் நினைவுகூரப்படும்.
            </p>
          </div>
        </div>
      </section>

      <section className="contribution-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-small-title">நினைவுகள்</p>
            <h2>அவர் விட்டுச் சென்ற பாதிப்பு</h2>
            <div className="gold-line center-line"></div>
          </div>

          <div className="contribution-grid">
            {tributes.map((item) => (
              <TributeCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-page-section">
        <div className="container">
          <div className="gallery-subsection">
            <div className="section-heading">
              <p className="section-small-title">நினைவுப் புகைப்படங்கள்</p>
              <h2>நிகழ்வுகள், அழைப்பிதழ்கள், செய்திகள்</h2>
              <div className="gold-line center-line"></div>
              <p style={{ maxWidth: "640px", margin: "0 auto", opacity: 0.85 }}>
                பிறந்தநாள் விழாக்கள், அஞ்சலி நிகழ்வுகள் மற்றும் தமிழண்ணல்
                அவர்கள் குறித்து வெளிவந்த செய்திகளின் தொகுப்பு. படத்தை
                சொடுக்கி பெரிதாகப் பாருங்கள்.
              </p>
            </div>

            <div className="gallery-page-grid">
              {memories.map((item) => (
                <MemoryCard item={item} onOpen={setActive} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="memory-quote-section">
        <div className="container memory-quote-content">
          <p>
            &ldquo;தமிழால் வாழ்ந்தவர், தமிழுக்காக வாழ்ந்தவர், தமிழ் என்று
            வாழ்ந்தவர்.&rdquo;
          </p>
          <span>— தமிழண்ணல்</span>
        </div>
      </section>

      <section className="share-memory-section">
        <div className="container share-memory-content">
          <div className="share-memory-icon">த</div>
          <p className="section-small-title">உங்கள் நினைவைப் பகிருங்கள்</p>
          <h2>தமிழண்ணல் பற்றிய உங்கள் அஞ்சலியைச் சேர்க்க விரும்புகிறீர்களா?</h2>
          <div className="gold-line center-line"></div>
          <p>
            அவருடன் தொடர்புடைய நினைவுகள், புகைப்படங்கள் அல்லது அஞ்சலிச்
            செய்திகள் உங்களிடம் இருந்தால் எங்களுடன் பகிரலாம்.
          </p>
          <Link to="/contact" className="share-memory-button">
            தொடர்புக்கு
          </Link>
        </div>
      </section>

      <Lightbox
        item={
          active ? { image: active.image, caption: active.caption } : null
        }
        onClose={() => setActive(null)}
      />
    </>
  );
}
