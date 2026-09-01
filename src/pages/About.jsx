import useReveal from "../hooks/useReveal";

const timeline = [
  {
    year: "1928",
    title: "பிறப்பு",
    text: "சிவகங்கை மாவட்டம் நெற்குப்பை என்னும் ஊரில் இராம. பெரியகருப்பன் அவர்கள் பிறந்தார்.",
  },
  {
    year: "கல்வி",
    title: "தமிழ் கல்வியும் ஆய்வும்",
    text: "தமிழ் மொழி, இலக்கியம் மற்றும் இலக்கணத்தில் உயர்கல்வி பயின்று ஆய்வுப் பணிகளில் ஈடுபட்டார்.",
  },
  {
    year: "பணி",
    title: "பல்கலைக்கழகப் பங்களிப்பு",
    text: "மதுரை காமராசர் பல்கலைக்கழகத்தின் தமிழ்த்துறையில் பேராசிரியராகவும் துறைத்தலைவராகவும் பணியாற்றினார்.",
  },
  {
    year: "நூல்கள்",
    title: "தமிழ் நூலாக்கப் பணி",
    text: "தமிழ் இலக்கியம், சங்க இலக்கியம், இலக்கணம் மற்றும் பண்பாடு சார்ந்து பல நூல்களை எழுதினார்.",
  },
  {
    year: "2015",
    title: "மறைவு",
    text: "29 டிசம்பர் 2015 அன்று தமிழண்ணல் அவர்கள் மறைந்தார். அவரது தமிழ் பணி இன்றும் தொடர்கிறது.",
  },
];

const contributions = [
  {
    num: "01",
    title: "தமிழ் இலக்கியம்",
    text: "தமிழ் இலக்கிய வரலாறு மற்றும் இலக்கியத் திறனாய்வு துறைகளில் நூல்களையும் கட்டுரைகளையும் வழங்கினார்.",
  },
  {
    num: "02",
    title: "சங்க இலக்கியம்",
    text: "அகநானூறு உள்ளிட்ட சங்க நூல்களின் இலக்கியச் சிறப்புகளை ஆய்வு செய்து எழுதியுள்ளார்.",
  },
  {
    num: "03",
    title: "தமிழ் இலக்கணம்",
    text: "தொல்காப்பியம் மற்றும் தமிழ் இலக்கண மரபு குறித்து பல்வேறு ஆய்வுப் பங்களிப்புகளைச் செய்தார்.",
  },
];

function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, revealed] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`${className} about-vintage-reveal${
        revealed ? " show-about-vintage" : ""
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function TimelineItem({ item, index }) {
  const [ref, revealed] = useReveal();
  return (
    <div
      className={`timeline-item about-timeline-item${
        revealed ? " show-about-vintage" : ""
      }`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      ref={ref}
    >
      <div className="timeline-year">{item.year}</div>
      <div className="timeline-content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Reveal as="section" className="page-banner about-page-banner">
        <div className="container">
          <p className="about-banner-small-text">
            தமிழண்ணல் அவர்களின் வாழ்க்கை வரலாறு
          </p>

          <h1>தமிழ்வாழ்வு</h1>

          <div className="breadcrumb">
            <span>முகப்பு</span>
            <span>›</span>
            <span>தமிழ்வாழ்வு</span>
          </div>

          <div className="about-banner-intro">
            <p className="section-small-title">வாழ்க்கைப் பயணம்</p>
            <h2>தமிழுக்காக வாழ்ந்த அறிஞர்</h2>
            <div className="gold-line center-line"></div>
            <p>
              தமிழ் மொழி, இலக்கியம் மற்றும் ஆய்வியல் துறைகளுக்காக தமது
              வாழ்நாளை அர்ப்பணித்த மூதறிஞர் தமிழண்ணல் அவர்களின்
              தமிழ்வாழ்வை நினைவுகூரும் தொகுப்பு.
            </p>
          </div>
        </div>
      </Reveal>

      <section className="biography-section">
        <Reveal as="div" className="container biography-grid">
          <div className="profile-photo-box">
            <img
              className="thamizhannal-test-photo"
              src="/images/thamizhannal-portrait.jpg"
              alt="மூதறிஞர் தமிழண்ணல் இராம. பெரியகருப்பன்"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="photo-caption">
              <h3>மூதறிஞர் தமிழண்ணல்</h3>
              <p>இராம. பெரியகருப்பன்</p>
            </div>
          </div>

          <article className="biography-content">
            <p className="section-small-title">வாழ்க்கை வரலாறு</p>
            <h2>தமிழுக்காக வாழ்ந்த அறிஞர்</h2>
            <div className="gold-line"></div>

            <p>
              தமிழண்ணல் என்று தமிழ் உலகம் அன்புடன் அழைத்த முனைவர் இராம.
              பெரியகருப்பன் அவர்கள் சிறந்த தமிழ் அறிஞர், எழுத்தாளர்,
              திறனாய்வாளர் மற்றும் பேராசிரியர் ஆவார்.
            </p>

            <p>
              அவர் 12 ஆகஸ்ட் 1928 அன்று சிவகங்கை மாவட்டத்தில் உள்ள
              நெற்குப்பை என்னும் ஊரில் பிறந்தார். இளமையிலிருந்தே தமிழ்
              மொழி மற்றும் இலக்கியத்தின் மீது மிகுந்த ஈடுபாடு
              கொண்டிருந்தார்.
            </p>

            <p>
              தமிழ் இலக்கணம், சங்க இலக்கியம், காப்பியங்கள், ஒப்பிலக்கியம்,
              நாட்டுப்புறவியல், மொழியியல் மற்றும் தமிழர் பண்பாடு போன்ற பல
              துறைகளில் ஆழமான ஆய்வுகளை மேற்கொண்டார்.
            </p>

            <blockquote>
              "தமிழ் மொழியின் வளர்ச்சியே தமிழரின் பண்பாட்டு வளர்ச்சி."
            </blockquote>

            <p>
              மதுரை காமராசர் பல்கலைக்கழகத்தில் தமிழ்த்துறைத் தலைவராகப்
              பணியாற்றிய தமிழண்ணல் அவர்கள், மாணவர்களுக்கும்
              ஆய்வாளர்களுக்கும் வழிகாட்டியாக விளங்கினார்.
            </p>

            <p>
              பல தமிழ் நூல்கள் மற்றும் ஆய்வுக் கட்டுரைகளை எழுதி, தமிழ்
              மொழியின் பெருமையை அடுத்த தலைமுறைக்கு எடுத்துச் சென்றார். 29
              டிசம்பர் 2015 அன்று அவர் மறைந்தாலும், அவரது தமிழ் பணிகள்
              என்றும் நிலைத்திருக்கும்.
            </p>
          </article>
        </Reveal>
      </section>

      <section className="timeline-section">
        <div className="container">
          <Reveal as="div" className="section-heading">
            <p className="section-small-title">முக்கிய நிகழ்வுகள்</p>
            <h2>தமிழண்ணலின் வாழ்க்கைப் பயணம்</h2>
            <div className="gold-line center-line"></div>
          </Reveal>

          <div className="timeline">
            {timeline.map((item, index) => (
              <TimelineItem item={item} index={index} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="contribution-section">
        <div className="container">
          <Reveal as="div" className="section-heading">
            <p className="section-small-title">தமிழ்ப்பணி</p>
            <h2>அவர் ஆற்றிய பங்களிப்புகள்</h2>
            <div className="gold-line center-line"></div>
          </Reveal>

          <div className="contribution-grid">
            {contributions.map((item) => (
              <Reveal
                as="div"
                className="contribution-card"
                key={item.num}
              >
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
