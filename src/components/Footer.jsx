import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>தமிழண்ணல்</h3>
            <p>
              மூதறிஞர் இராம. பெரியகருப்பன்
              <br />
              (12.08.1928 – 29.12.2015)
            </p>
          </div>

          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <Link to="/about">தமிழ்வாழ்வு</Link>
            <Link to="/gallery">ஒளிப்படங்கள்</Link>
            <Link to="/books">நூல்கள்</Link>
            <Link to="/remembrance">நினைவேந்தல்</Link>
            <Link to="/contact">தொடர்புகொள்ள</Link>
          </div>

          <div className="footer-col">
            <h4>CONTACT</h4>
            <Link to="/contact">Send a message →</Link>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 தமிழண்ணல் — Thamizhannal Tamil Development Foundation.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
