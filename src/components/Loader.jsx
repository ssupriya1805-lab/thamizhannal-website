import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`archive-loader${hide ? " loader-hide" : ""}`}>
      <div className="loader-copper-plate">
        <div className="loader-seal">த</div>
        <p>தமிழண்ணல்</p>
        <span>தமிழ் மரபுக் காப்பகம் திறக்கப்படுகிறது</span>
        <div className="loader-line"></div>
      </div>
    </div>
  );
}
