# தமிழண்ணல் இணையதளம் (React Version)

இது உங்கள் பழைய static HTML/CSS/JS தளத்தை React (Vite) கொண்டு மாற்றி
உருவாக்கப்பட்ட புதிய project. **Design, style, colours எல்லாம் உங்கள்
zip file-ல் இருந்த style.css-லிருந்தே** எடுக்கப்பட்டுள்ளது — எதுவும்
மாற்றப்படவில்லை.

## இயக்குவது எப்படி (How to run)

```bash
npm install
npm run dev       # local-ல் பார்க்க (http://localhost:5173)
npm run build     # production build (dist/ கோப்புறை உருவாகும்)
```

`npm run build` பண்ணின பிறகு `dist/` கோப்புறையை எந்த static hosting-லும்
(Netlify, Vercel, GitHub Pages, cPanel...) upload செய்யலாம்.

## என்னென்ன மாற்றப்பட்டது / சேர்க்கப்பட்டது

1. **React + React Router** — முழு தளமும் இப்போது ஒரே React app.
   பக்கங்கள்: முகப்பு, தமிழ்வாழ்வு, நூல்கள், கட்டுரைகள், வாழ்க்கைப்
   பயணம் (Gallery), தொடர்புக்கு.

2. **கட்டுரைகள் (Articles) பக்கம் சரி செய்யப்பட்டது** — இப்போது
   `/articles` route சரியாக render ஆகி, தேடல் (search) வேலை செய்கிறது.

3. **விருதுகள் பக்கம் Gallery-உடன் இணைக்கப்பட்டது** — தனி
   "விருதுகளும் பங்களிப்புகளும்" pageஐ நீக்கி, அதன் உள்ளடக்கத்தை
   "வாழ்க்கைப் பயணம்" (Gallery) பக்கத்திற்குள் பிரிவுகளாக
   (sections) சேர்த்துவிட்டோம்: வாழ்க்கைப் பயணம் → விருதுகள் →
   உயர் விருதுகள் → உலகப் பெருந்தமிழர் விருது. Header navigation-ல்
   இருந்த "விருதுகள்" மெனு நீக்கப்பட்டது.

4. **நூல்கள் பக்கம் — Flipbook Reader** — ஒவ்வொரு நூலின் அட்டைப்
   படத்தையும் சொடுக்கினால், உண்மையான புத்தகம் போல பக்கம் புரட்டிப்
   படிக்கக்கூடிய "flipbook" திறக்கும் (`/books/<slug>`).
   இது PDF கோப்பிலிருந்து பக்கங்களை தானாக வரைந்து காட்டும்.

5. **Gallery-ல் Lightbox** — படத்தை சொடுக்கினால் பெரிதாகப் பார்க்கலாம்.

## உங்கள் சொந்த நூல்களையும் (PDF) படங்களையும் எப்படி சேர்ப்பது

### நூல் (PDF) சேர்க்க
1. உங்கள் PDF கோப்பை `public/books/` கோப்புறையில் போடவும்.
   எ.கா: `public/books/book1.pdf`
2. அட்டைப் படத்தை `public/images/books/` கோப்புறையில் போடவும்.
   எ.கா: `public/images/books/book1.jpg`
3. `src/data/books.js` கோப்பைத் திறந்து, ஏற்கனவே உள்ள ஒரு entry-ஐப்
   பார்த்து அதே மாதிரி ஒரு object சேர்க்கவும் (அல்லது இருப்பதை
   edit செய்யவும்):

```js
{
  id: "book7",
  slug: "unga-puthiya-noolin-peyar",   // URL-ல் தெரியும் பெயர்
  title: "உங்கள் நூலின் தலைப்பு",
  category: "literature",              // literature | sangam | grammar
  categoryLabel: "இலக்கியம்",
  coverImage: "/images/books/book7.jpg",
  pdfUrl: "/books/book7.pdf",
  description: "நூலைப் பற்றிய ஒரு வரி விளக்கம்.",
}
```

இதுவே போதும் — Books பக்கத்திலும், flipbook reader-லும் தானாகத்
தெரியும். PDF இல்லாத நூலுக்கு `pdfUrl: ""` என விடலாம்;
"PDF இன்னும் சேர்க்கப்படவில்லை" எனக் காட்டிவிடும்.

**முக்கியம் — Copyright:** உங்களுக்குச் சொந்தமான அல்லது பதிப்புரிமை
அனுமதி உள்ள PDF-களை மட்டுமே பதிவேற்றவும். இந்த project-ல் எந்த
PDF உள்ளடக்கமும் நாங்கள் சேர்க்கவில்லை — கட்டமைப்பு (folder + code)
மட்டுமே தயார் செய்யப்பட்டுள்ளது; உள்ளடக்கத்தை நீங்கள் தான் சேர்க்க
வேண்டும்.

### Gallery படங்கள் சேர்க்க
1. படத்தை பொருத்தமான கோப்புறையில் போடவும்:
   - `public/images/gallery/gallery-general/` → வாழ்க்கைப் பயண படங்கள்
   - `public/images/gallery/awards/` → விருது படங்கள்
2. `src/data/gallery.js`-ல் அந்தப் படத்தின் பெயருடன் பொருந்தும்படி
   `image` field-ஐ சரிபார்க்கவும் (அல்லது புதிய item சேர்க்கவும்).

## Folder அமைப்பு (Project structure)

```
public/
  books/                 ← PDF புத்தகங்கள் இங்கே
  images/
    books/               ← நூல் அட்டைப் படங்கள்
    gallery/
      gallery-general/   ← வாழ்க்கைப் பயண புகைப்படங்கள்
      awards/            ← விருது புகைப்படங்கள்
src/
  components/            ← Header, Footer, FlipbookViewer, Lightbox...
  data/
    books.js             ← நூல் பட்டியல் (edit பண்ண இதுவே போதும்)
    gallery.js           ← Gallery பட பட்டியல்
  pages/                 ← ஒவ்வொரு route-க்கும் ஒரு பக்கம்
  index.css              ← உங்கள் அசல் style.css (மாற்றப்படவில்லை)
```

## குறிப்பு

`src/index.css`-ல் உள்ள சில decorative background image-கள்
(எ.கா. `antique-books.jpg`, `paper-texture.jpg`, `thamizhannal-*.jpg`)
கோப்புகள் இதில் இல்லை — அவை இல்லாமலும் தளம் நன்றாகவே தெரியும்
(gradient background fallback ஆகிறது). அந்த படங்களையும் சேர்க்க
விரும்பினால் `public/images/` கோப்புறையில் அதே பெயரில் போடவும்.
