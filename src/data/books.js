/**
 * BOOK LIST — எடிட் பண்ண இந்த ஒரே கோப்பு போதும்.
 *
 * புதிய நூல் சேர்க்க:
 *   1. PDF-ஐ  /public/books/  கோப்புறையில் போடவும் (எ.கா. book1.pdf)
 *   2. அட்டைப் படத்தை /public/images/books/ கோப்புறையில் போடவும் (எ.கா. book1.jpg)
 *   3. கீழே ஒரு object சேர்க்கவும்.
 *
 * pdf இல்லாத நூலுக்கு pdfUrl-ஐ "" ஆக விடலாம் — "விரைவில்" என்று காட்டப்படும்.
 */

export const categories = [
  { id: "all", label: "அனைத்து நூல்கள்" },
  { id: "literature", label: "இலக்கியம்" },
  { id: "sangam", label: "சங்க இலக்கியம்" },
  { id: "grammar", label: "இலக்கணம்" },
];

const AUTHOR_NAME = "மூதறிஞர் இராம. பெரியகருப்பன் (தமிழண்ணல்)";

const books = [
  {
    id: "book1",
    slug: "puthiya-nokkil-thamizh-ilakkiya-varalaru",
    title: "புதிய நோக்கில் தமிழ் இலக்கிய வரலாறு",
    titleEn: "Puthiya Nokkil Thamizh Ilakkiya Varalaru",
    author: AUTHOR_NAME,
    category: "literature",
    categoryLabel: "இலக்கிய வரலாறு",
    coverImage: "/images/books/book1.jpg",
    pdfUrl: "/books/book1.pdf",
    description:
      "தமிழ் இலக்கியத்தின் வளர்ச்சியைப் புதிய பார்வையில் அறிமுகப்படுத்தும் ஆய்வு நூல்.",
  },
  {
    id: "book2",
    slug: "agananooru-kaatchikal",
    title: "அகநானூற்றுக் காட்சிகள்",
    titleEn: "Agananooru Kaatchikal",
    author: AUTHOR_NAME,
    category: "sangam",
    categoryLabel: "சங்க இலக்கியம்",
    coverImage: "/images/books/book2.jpg",
    pdfUrl: "/books/book2.pdf",
    description:
      "அகநானூறு பாடல்களில் இடம்பெறும் வாழ்வியல் மற்றும் இலக்கியக் காட்சிகளை விளக்கும் நூல்.",
  },
  {
    id: "book3",
    slug: "tholkappiyam-eliya-arimugam",
    title: "தொல்காப்பியம் எளிய அறிமுகம்",
    titleEn: "Tholkappiyam Eliya Arimugam",
    author: AUTHOR_NAME,
    category: "grammar",
    categoryLabel: "இலக்கணம்",
    coverImage: "/images/books/book3.jpg",
    pdfUrl: "/books/book3.pdf",
    description:
      "தொல்காப்பியத்தின் இலக்கண மரபையும் முக்கியக் கருத்துகளையும் எளிமையாக எடுத்துரைக்கும் நூல்.",
  },
  {
    id: "book4",
    slug: "ilakkiya-thiranaivu",
    title: "இலக்கியத் திறனாய்வு",
    titleEn: "Ilakkiya Thiranaivu",
    author: AUTHOR_NAME,
    category: "literature",
    categoryLabel: "திறனாய்வு",
    coverImage: "/images/books/book4.jpg",
    pdfUrl: "/books/book4.pdf",
    description:
      "இலக்கியப் படைப்புகளை அணுகும் முறைகள் மற்றும் திறனாய்வுச் சிந்தனைகள் பற்றிய நூல்.",
  },
  {
    id: "book5",
    slug: "kurinjipaattu",
    title: "குறிஞ்சிப் பாட்டு",
    titleEn: "Kurinjipaattu",
    author: AUTHOR_NAME,
    category: "sangam",
    categoryLabel: "சங்க இலக்கியம்",
    coverImage: "/images/books/book5.jpg",
    pdfUrl: "/books/book5.pdf",
    description:
      "சங்க காலத்தின் குறிஞ்சி நில வாழ்வியலையும் காதல் உணர்வையும் விளக்கும் இலக்கியப் பார்வை.",
  },
  {
    id: "book6",
    slug: "thamizhai-arivom-vaazhvom",
    title: "தமிழை அறிவோம்! தமிழராய் வாழ்வோம்!",
    titleEn: "Thamizhai Arivom! Thamizharaai Vaazhvom!",
    author: AUTHOR_NAME,
    category: "grammar",
    categoryLabel: "தமிழ் மொழி",
    coverImage: "/images/books/book6.jpg",
    pdfUrl: "/books/book6.pdf",
    description:
      "தாய்மொழி உணர்வு, தமிழ் பயன்பாடு மற்றும் தமிழர் அடையாளம் குறித்து பேசும் நூல்.",
  },
];

export default books;