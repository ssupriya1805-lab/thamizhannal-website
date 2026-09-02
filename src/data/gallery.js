/**
 * GALLERY DATA — "வாழ்க்கைப் பயணம்" பக்கத்திற்கான தரவு.
 *
 * புதிய படம் சேர்க்க:
 *   1. படத்தை /public/images/gallery/gallery-general/ உள்ளே போடவும்.
 *   2. கீழே பொருத்தமான section-இன் items பட்டியலில், அந்தப் படத்தின்
 *      பாதையை image field-ல் கொடுக்கவும் (எ.கா.
 *      "/images/gallery/gallery-general/early-life-1.jpg").
 *
 * image காலியாக ("") இருக்கும்வரை, அந்த இடத்தில் "படம் இன்னும் இல்லை"
 * எனக் காட்டப்படும் — தளம் உடையாது.
 */

const gallerySections = [
  {
    id: "early-life",
    title: "ஆரம்பகால வாழ்வு",
    items: [
      { id: "early-life-1", image: "", tag: "இளமைக்காலம்" },
      { id: "early-life-2", image: "", tag: "இளமைக்காலம்" },
      { id: "early-life-3", image: "", tag: "இளமைக்காலம்" },
    ],
  },
  {
    id: "college-life",
    title: "கல்லூரி வாழ்வு",
    items: [
      { id: "college-life-1", image: "", tag: "கல்லூரி நாட்கள்" },
      { id: "college-life-2", image: "", tag: "கல்லூரி நாட்கள்" },
      { id: "college-life-3", image: "", tag: "கல்லூரி நாட்கள்" },
    ],
  },
  {
    id: "japan-trip",
    title: "ஜப்பான் பயணம்",
    items: [
      { id: "japan-trip-1", image: "", tag: "ஜப்பான் பயணம்" },
      { id: "japan-trip-2", image: "", tag: "ஜப்பான் பயணம்" },
      { id: "japan-trip-3", image: "", tag: "ஜப்பான் பயணம்" },
    ],
  },
  {
    id: "mani-vizha",
    title: "மணி விழா",
    items: [
      { id: "mani-vizha-1", image: "", tag: "மணி விழா" },
      { id: "mani-vizha-2", image: "", tag: "மணி விழா" },
      { id: "mani-vizha-3", image: "", tag: "மணி விழா" },
      { id: "mani-vizha-4", image: "", tag: "மணி விழா" },
    ],
  },
  {
    id: "america-trip",
    title: "அமெரிக்கா பயணம்",
    items: [
      { id: "america-trip-1", image: "", tag: "அமெரிக்கா பயணம்" },
      { id: "america-trip-2", image: "", tag: "அமெரிக்கா பயணம்" },
      { id: "america-trip-3", image: "", tag: "அமெரிக்கா பயணம்" },
    ],
  },
  {
    id: "thamizh-vazhi-kalvi",
    title: "தமிழ்வழிக் கல்வி",
    items: [
      { id: "tvk-1", image: "", tag: "தமிழ்வழிக் கல்வி" },
      { id: "tvk-2", image: "", tag: "தமிழ்வழிக் கல்வி" },
      { id: "tvk-3", image: "", tag: "தமிழ்வழிக் கல்வி" },
    ],
  },
  {
    id: "sandror-perevai",
    title: "சான்றோர் பேரவை",
    items: [
      { id: "sandror-1", image: "", tag: "சான்றோர் பேரவை" },
      { id: "sandror-2", image: "", tag: "சான்றோர் பேரவை" },
      { id: "sandror-3", image: "", tag: "சான்றோர் பேரவை" },
      { id: "sandror-4", image: "", tag: "சான்றோர் பேரவை" },
    ],
  },
  {
    id: "book-launches",
    title: "நூல் வெளியீடுகள்",
    items: [
      { id: "book-launch-1", image: "", tag: "நூல் வெளியீடு" },
      { id: "book-launch-2", image: "", tag: "நூல் வெளியீடு" },
      { id: "book-launch-3", image: "", tag: "நூல் வெளியீடு" },
    ],
  },
  {
    id: "high-awards",
    title: "உயர் விருதுகள்",
    items: [
      { id: "high-award-1", image: "", tag: "உயர் விருது" },
      { id: "high-award-2", image: "", tag: "உயர் விருது" },
      { id: "high-award-3", image: "", tag: "உயர் விருது" },
      { id: "high-award-4", image: "", tag: "உயர் விருது" },
    ],
  },
];

export default gallerySections;
