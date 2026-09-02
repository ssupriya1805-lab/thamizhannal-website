import { useState } from "react";
import gallerySections from "../data/gallery";
import Lightbox from "../components/Lightbox";
import useReveal from "../hooks/useReveal";

function GalleryCard({ item, onOpen }) {
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

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="page-banner gallery-page-banner">
        <div className="container">
          <p>மூதறிஞர் தமிழண்ணல் அவர்களின் நினைவுகள்</p>
          <h1>வாழ்க்கைப் பயணம்</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>வாழ்க்கைப் பயணம்</span>
          </div>

          <div className="gallery-banner-intro">
            <p className="section-small-title">நினைவுப் படங்கள்</p>
            <h2>தமிழண்ணலின் வாழ்க்கைத் தருணங்கள்</h2>
            <div className="gold-line center-line"></div>
            <p className="gallery-intro">
              தமிழ் மொழி மற்றும் இலக்கிய வளர்ச்சிக்காக அர்ப்பணிக்கப்பட்ட
              வாழ்க்கைப் பயணத்தின் முக்கியமான தருணங்களை நினைவுகூரும்
              புகைப்படத் தொகுப்பு. படத்தை சொடுக்கி பெரிதாகப் பாருங்கள்.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-page-section">
        <div className="container">
          {gallerySections.map((section) => (
            <div className="gallery-subsection" key={section.id}>
              <div className="section-heading">
                <h2>{section.title}</h2>
                <div className="gold-line center-line"></div>
              </div>

              <div className="gallery-page-grid">
                {section.items.map((item) => (
                  <GalleryCard item={item} onOpen={setActive} key={item.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="memory-quote-section">
        <div className="container memory-quote-content">
          <p>
            "தமிழ் வாழ்ந்தால் தமிழர் வாழ்வர்; தமிழ் வளர்ந்தால் தமிழர்
            உயர்வர்."
          </p>
          <span>— தமிழண்ணல் நினைவு</span>
        </div>
      </section>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}
