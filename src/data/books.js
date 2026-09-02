/**
 * BOOK LIST — நீங்கள் கொடுத்த பட்டியலின்படி, 11 பிரிவுகளில் 32 நூல்கள்.
 *
 * PDF கோப்புகள் — /public/books/ கோப்புறையில் ஏற்கனவே நீங்கள் போட்டு
 * வைத்திருக்கும் கோப்புகளின் பெயர் **நூலின் தலைப்புடன் சரியாகப்**
 * பொருந்த வேண்டும் (எ.கா. "பரிசில் வாழ்க்கை.pdf"). கீழே pdfUrl தானாகவே
 * "/books/<தலைப்பு>.pdf" என உருவாக்கப்படுகிறது — கோப்புப் பெயரை
 * தலைப்புடன் exact-ஆக ஒரே மாதிரி வைத்திருந்தால் போதும்.
 *
 * அட்டைப் படம் தேவையில்லை — ஒவ்வொரு நூலின் PDF-இன் முதல் பக்கமே
 * தானாக அட்டைப் படமாகக் காட்டப்படும் (PdfCoverThumb component).
 *
 * புதிய நூல் சேர்க்க: கீழே பொருத்தமான category-யில் ஒரு object
 * சேர்க்கவும் — title, category, categoryLabel மட்டும் கொடுத்தால் போதும்.
 */

export const categories = [
  { id: "ilakkiyam", label: "இலக்கியம்" },
  { id: "tholkappiyam", label: "தொல்காப்பியம்" },
  { id: "thirukkural", label: "திருக்குறள்" },
  { id: "ilakkanam", label: "இலக்கணம்" },
  { id: "urai", label: "உரை" },
  { id: "mozhiyial", label: "மொழியியல்" },
  { id: "aaivu", label: "ஆய்வு" },
  { id: "thamizhannal", label: "தமிழண்ணல்" },
  { id: "thamizhar", label: "தமிழர்" },
  { id: "pudhinam", label: "புதினம்" },
  { id: "matrhavai", label: "மற்றவை" },
];

const AUTHOR_NAME = "மூதறிஞர் இராம. பெரியகருப்பன் (தமிழண்ணல்)";

// title-லிருந்து ஆங்கில எழுத்துகளில் மட்டும் ஒரு URL slug உருவாக்குகிறது
// (பாதை/URL-ல் மட்டும் பயன்படும் — காட்சிப்படுத்தும் தலைப்பு எப்போதும்
// தமிழிலேயே இருக்கும்).
function toSlug(category, index) {
  return `${category}-${index + 1}`;
}

const rawBooks = [
  // இலக்கியம் — 5
  { title: "பரிசில் வாழ்க்கை", category: "ilakkiyam" },
  { title: "சங்க இலக்கிய ஒப்பீடு", category: "ilakkiyam" },
  { title: "சங்க இலக்கியத் தொன்மை", category: "ilakkiyam" },
  { title: "அகச்சான்றுகள் சங்க மரபு", category: "ilakkiyam" },
  { title: "அகநானூற்றுக் காட்சிகள்", category: "ilakkiyam" },

  // தொல்காப்பியம் — 5
  { title: "தொல்காப்பியர்", category: "tholkappiyam" },
  { title: "தொல்காப்பியம் எழுத்ததிகாரம்", category: "tholkappiyam" },
  { title: "தொல்காப்பியம் சொல்லதிகாரம்", category: "tholkappiyam" },
  { title: "தொல்காப்பியம் பொருளதிகாரம் — தொகுதி 1", category: "tholkappiyam" },
  { title: "தொல்காப்பியம் பொருளதிகாரம் — தொகுதி 2", category: "tholkappiyam" },

  // திருக்குறள் — 5
  { title: "திருவள்ளுவர் அருளிய திருக்குறள்", category: "thirukkural" },
  { title: "திருக்குறள் நுண்ணுரை", category: "thirukkural" },
  { title: "திருக்குறள் கற்கும் நெறிமுறைகள்", category: "thirukkural" },
  { title: "தேடவைக்கும் திருவள்ளுவர்", category: "thirukkural" },
  { title: "வள்ளுவர் நெறியில் வாழ்வது எப்போது", category: "thirukkural" },

  // இலக்கணம் — 2
  { title: "நன்னூல் எழுத்ததிகாரம்", category: "ilakkanam" },
  { title: "நன்னூல் சொல்லதிகாரம்", category: "ilakkanam" },

  // உரை — 2
  { title: "தண்டியலங்காரம்", category: "urai" },
  { title: "தமிழ் நான்மறை விளக்கம்", category: "urai" },

  // மொழியியல் — 3
  { title: "சொல் புதிது சுவை புதிது", category: "mozhiyial" },
  { title: "தமிழில் அடிக்கடி நேரும் பிழைகளும் திருத்தமும்", category: "mozhiyial" },
  { title: "தமிழுக்கு ஆகமங்கள் தடையாகுமா?", category: "mozhiyial" },

  // ஆய்வு — 2
  { title: "தமிழர் சமயமும் சமஸ்கிருதமும்", category: "aaivu" },
  { title: "தமிழரின் வினைக் கோட்பாடு", category: "aaivu" },

  // தமிழண்ணல் — 2
  { title: "அண்ணல் தமிழ்", category: "thamizhannal" },
  { title: "தமிழண்ணல் தமிழுக்குத் தந்த சீர்வரிசை", category: "thamizhannal" },

  // தமிழர் — 2
  { title: "தமிழனின் தாழ்வு மனப்பான்மை", category: "thamizhar" },
  { title: "ஊடகங்களால் ஊரைப் பற்றும் நெருப்பு", category: "thamizhar" },

  // புதினம் — 2
  { title: "வாழ்வரசி", category: "pudhinam" },
  { title: "நச்சுவளையம்", category: "pudhinam" },

  // மற்றவை — 2
  { title: "தாலாட்டு", category: "matrhavai" },
  { title: "உள்ளங்கள் ஒன்றிடும் அன்றில் பறவைகள்", category: "matrhavai" },
];

const categoryLabelOf = (id) =>
  categories.find((c) => c.id === id)?.label || id;

// title-ல் இருக்கும் அதே பெயரில் PDF கோப்பு /public/books/ -ல் இருக்கும்
// என்று எதிர்பார்க்கப்படுகிறது.
const books = (() => {
  const perCategoryCount = {};

  return rawBooks.map((b) => {
    perCategoryCount[b.category] = (perCategoryCount[b.category] || 0) + 1;
    const index = perCategoryCount[b.category] - 1;

    return {
      id: toSlug(b.category, index),
      slug: toSlug(b.category, index),
      title: b.title,
      author: AUTHOR_NAME,
      category: b.category,
      categoryLabel: categoryLabelOf(b.category),
      pdfUrl: `/books/${b.title}.pdf`,
    };
  });
})();

export default books;
