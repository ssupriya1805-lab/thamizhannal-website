export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="மூடு">
          ✕
        </button>
        <img src={item.image} alt={item.caption || item.title || ""} />
        {(item.title || item.caption) && (
          <div className="lightbox-caption">
            {item.title && <h3>{item.title}</h3>}
            {item.caption && <p>{item.caption}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
