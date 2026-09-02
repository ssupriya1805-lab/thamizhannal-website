import media from "../data/media";
import useReveal from "../hooks/useReveal";

function AudioSection() {
  const [ref, revealed] = useReveal();
  return (
    <section
      ref={ref}
      className={`home-media-block vintage-reveal${
        revealed ? " show-vintage" : ""
      }`}
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-small-title">ஒலிவடிவம்</p>
          <h2>{media.audioTitle || "தமிழண்ணல் அவர்களின் உரை"}</h2>
          {media.audioByline && (
            <p className="home-media-byline">{media.audioByline}</p>
          )}
        </div>

        <div className="home-media-panel">
          {media.audioSrc ? (
            <>
              {media.audioParagraphs?.map((p, i) => (
                <p className="home-media-desc" key={i}>
                  {p}
                </p>
              ))}

              {media.audioCaption && (
                <p className="home-media-caption">{media.audioCaption}</p>
              )}

              <audio
                controls
                className="w-full"
                src={media.audioSrc}
                title={media.audioTitle}
              >
                உங்கள் browser audio-ஐ ஆதரிக்கவில்லை.
              </audio>
            </>
          ) : (
            <div className="home-audio-empty">
              ஒலிப்பதிவு இன்னும் சேர்க்கப்படவில்லை. <br />
              (src/data/media.js-ல் audioSrc-ஐ கொடுக்கவும்)
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const [ref, revealed] = useReveal();
  return (
    <section
      ref={ref}
      className={`home-media-block home-media-block-alt vintage-reveal${
        revealed ? " show-vintage" : ""
      }`}
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-small-title">ஒளிப்படம்</p>
          <h2>{media.youtubeTitle || "நினைவுக் காணொளி"}</h2>
          {media.youtubeByline && (
            <p className="home-media-byline">{media.youtubeByline}</p>
          )}
        </div>

        <div className="home-media-panel home-media-panel-video">
          {media.youtubeId ? (
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${media.youtubeId}`}
                title={media.youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="home-video-empty">
              YouTube வீடியோ இன்னும் இணைக்கப்படவில்லை. <br />
              (src/data/media.js-ல் youtubeId-ஐ கொடுக்கவும்)
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function HomeMedia() {
  return (
    <>
      <AudioSection />
      <VideoSection />
    </>
  );
}
