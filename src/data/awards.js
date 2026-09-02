/**
 * AWARDS DATA — "விருதுகள்" பக்கத்திற்கான தரவு.
 *
 * புதிய விருதுப் படம் சேர்க்க:
 *   1. படத்தை /public/images/gallery/awards/ உள்ளே போடவும்.
 *   2. கீழே பொருத்தமான section-இல், அந்த item-இன் image field-ல்
 *      அந்தப் பாதையைக் கொடுக்கவும் (எ.கா.
 *      "/images/gallery/awards/ponkizhi.jpg").
 *
 * image காலியாக ("") இருக்கும்வரை "படம் இன்னும் இல்லை" எனக்
 * காட்டப்படும் — தளம் உடையாது.
 */

const awardSections = [
  {
    id: "awards",
    title: "விருதுகள்",
    items: [
      { id: "award-1", image: "", tag: "விருது 01" },
      { id: "award-2", image: "", tag: "விருது 02" },
      { id: "award-3", image: "", tag: "விருது 03" },
      { id: "award-4", image: "", tag: "விருது 04" },
      { id: "award-5", image: "", tag: "விருது 05" },
    ],
  },
  {
    id: "world-tamil-award",
    title: "உலக தமிழ் விருது",
    items: [
      { id: "world-award-1", image: "", tag: "உலக அங்கீகாரம் 01" },
      { id: "world-award-2", image: "", tag: "உலக அங்கீகாரம் 02" },
      { id: "world-award-3", image: "", tag: "உலக அங்கீகாரம் 03" },
      { id: "world-award-4", image: "", tag: "உலக அங்கீகாரம் 04" },
      { id: "world-award-5", image: "", tag: "உலக அங்கீகாரம் 05" },
    ],
  },
];

export default awardSections;
