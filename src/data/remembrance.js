/**
 * REMEMBRANCE DATA — "நினைவேந்தல்" பக்கத்திற்கான நினைவுப் படங்கள்.
 *
 * இவை thamizhannal.org தளத்தில் ஏற்கனவே பொதுவில் வெளியிடப்பட்டுள்ள
 * அதே CDN (r2.dev) இணைப்புகள் — எனவே எந்தப் படத்தையும் பதிவேற்றத்
 * தேவையில்லாமலேயே இப்போதே காட்டப்படும்.
 *
 * புதிய நினைவுப் படம் சேர்க்க:
 *   1. படத்தை /public/images/gallery/gallery-general/ கோப்புறையில்
 *      போடவும் (எ.கா. remembrance-7.jpg).
 *   2. கீழே memories பட்டியலில் ஒரு object சேர்த்து, image-ஐ
 *      "/images/gallery/gallery-general/remembrance-7.jpg" எனக்
 *      கொடுக்கவும். (local கோப்புகள் "/"-ல் தொடங்கும், CDN இணைப்புகள்
 *      "https://"-ல் தொடங்கும் — இரண்டும் தானாகவே வேலை செய்யும்.)
 */

export const memories = [
  {
    id: "rem-1",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/news-item-2018-08-16.jpg",
    caption: "2018 ஆகஸ்ட் — செய்தி",
  },
  {
    id: "rem-2",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/tamilannal-birthday-final.jpg",
    caption: "பிறந்தநாள் கொண்டாட்டம்",
  },
  {
    id: "rem-3",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/tamilannal-89th-birthday-function-invitation.jpg",
    caption: "89ஆவது பிறந்தநாள் விழா — அழைப்பிதழ்",
  },
  {
    id: "rem-4",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/2016-feb-11-invitation-page-001.jpg",
    caption: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 1)",
  },
  {
    id: "rem-5",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/2016-feb-11-invitation-page-002.jpg",
    caption: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 2)",
  },
  {
    id: "rem-6",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/2016-feb-11-invitation-page-003.jpg",
    caption: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 3)",
  },
  {
    id: "rem-7",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/2016-feb-11-invitation-page-004.jpg",
    caption: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 4)",
  },
  {
    id: "rem-8",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/12509659_1099731256712932_6522167898958371003_n.jpg",
    caption: "நினைவுப் படம்",
  },
  {
    id: "rem-9",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/dinamani-feb-12.jpeg",
    caption: "தினமணி — பிப்ரவரி 12",
  },
  {
    id: "rem-10",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/img-20160129-wa0062.jpg",
    caption: "2016 ஜனவரி 29",
  },
  {
    id: "rem-11",
    image:
      "https://pub-0ce93fbfa7e8471cb6002dfda2c42a59.r2.dev/images/remembrance/img-20160130-wa0009.jpg",
    caption: "2016 ஜனவரி 30",
  },
];

export default memories;
