import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <>
      <section className="page-banner contact-page-banner">
        <div className="container">
          <p className="contact-banner-small-text">
            உங்கள் கருத்துகளையும் தகவல்களையும் பகிருங்கள்
          </p>

          <h1>தொடர்புக்கு</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>தொடர்புக்கு</span>
          </div>

          <div className="contact-banner-intro">
            <p className="section-small-title">தொடர்பில் இருப்போம்</p>
            <h2>தமிழ் நினைவுகளைப் பகிர்வோம்</h2>
            <div className="gold-line center-line"></div>
            <p>
              தமிழண்ணல் அவர்களின் நூல்கள், புகைப்படங்கள், நினைவுகள் மற்றும்
              தமிழ் இலக்கியம் தொடர்பான தகவல்களை எங்களுடன் பகிரலாம்.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-information">
            <p className="section-small-title">தொடர்பு விவரங்கள்</p>
            <h2>தமிழ் தொடர்பான தகவல்களைப் பகிருங்கள்</h2>
            <div className="gold-line"></div>

            <p className="contact-description">
              தமிழண்ணல் அவர்களின் நூல்கள், புகைப்படங்கள், நினைவுகள் அல்லது
              தமிழ் இலக்கியம் தொடர்பான தகவல்கள் இருந்தால் எங்களுடன்
              பகிரலாம்.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">✉</div>
                <div>
                  <h3>மின்னஞ்சல்</h3>
                  <p>info@thamizhannal-project.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">☎</div>
                <div>
                  <h3>தொலைபேசி</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">⌂</div>
                <div>
                  <h3>முகவரி</h3>
                  <p>
                    தமிழ் ஆய்வு மையம்,
                    <br />
                    தமிழ்நாடு, இந்தியா
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h2>செய்தி அனுப்புக</h2>
            <p>தேவையான விவரங்களை நிரப்பி உங்கள் செய்தியை அனுப்புங்கள்.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">உங்கள் பெயர்</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="பெயரை உள்ளிடுக"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">மின்னஞ்சல் முகவரி</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    தொலைபேசி எண் <small>(விருப்பம்)</small>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">தலைப்பு</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="செய்தியின் தலைப்பு"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">உங்கள் செய்தி</label>
                <textarea
                  id="message"
                  placeholder="உங்கள் செய்தியை இங்கே எழுதுங்கள்"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                செய்தியை அனுப்புக
              </button>

              {sent && (
                <p className="form-message">
                  உங்கள் செய்தி வெற்றிகரமாகப் பெறப்பட்டது. நன்றி!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="share-memory-section">
        <div className="container share-memory-content">
          <div className="share-memory-icon">த</div>
          <p className="section-small-title">நினைவகப் பங்களிப்பு</p>
          <h2>தமிழண்ணல் பற்றிய நினைவுகளைப் பகிருங்கள்</h2>
          <div className="gold-line center-line"></div>

          <p>
            தமிழண்ணல் அவர்களுடன் தொடர்புடைய பழைய புகைப்படங்கள், நூல்கள்,
            கடிதங்கள், விருதுச் சான்றிதழ்கள் அல்லது தனிப்பட்ட நினைவுகள்
            உங்களிடம் இருந்தால் எங்களுடன் பகிரலாம்.
          </p>

          <a href="#top" className="share-memory-button">
            தகவலைப் பகிருங்கள்
          </a>
        </div>
      </section>

      <section className="contact-note-section">
        <div className="container">
          <p>
            இது ஒரு கல்வித் திட்டத்திற்காக உருவாக்கப்பட்ட மாதிரி
            இணையதளம். மேற்கண்ட மின்னஞ்சல் மற்றும் தொலைபேசி எண்கள்
            மாதிரிக்காக மட்டுமே.
          </p>
        </div>
      </section>
    </>
  );
}
