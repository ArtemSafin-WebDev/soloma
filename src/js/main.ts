import "virtual:svg-icons-register";
import "../scss/style.scss";
import faq from "./faq";
import art from "./art";
import team from "./team";
import reviews from "./reviews";
import events from "./events";
import intro from "./intro";
import fancybox from "./fancybox";

import initIntroAnimation from "./animation/introAnimation";
import initEstheticsAnimation from "./animation/estheticsAnimation";
import initWatchAnimation from "./animation/watchAnimation";
<<<<<<< HEAD
import smoothScrolling from "./smoothScrolling";
import choose from "./choose";
=======
import initArtAnimation from "./animation/artAnimation";
import initVariantsAnimation from "./animation/variantsAnimation";
>>>>>>> af519d20b959d2d098df3c490370f4ef1b625e98

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  faq();
  art();
  team();
  reviews();
  events();
  intro();
  fancybox();
  choose();
  initIntroAnimation();
  initEstheticsAnimation();
  initWatchAnimation();
  initArtAnimation();
  initVariantsAnimation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
