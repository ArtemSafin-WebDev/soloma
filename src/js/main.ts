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

document.addEventListener("DOMContentLoaded", () => {
  faq();
  art();
  team();
  reviews();
  events();
  intro();
  fancybox();

  initIntroAnimation();
  initEstheticsAnimation();
  initWatchAnimation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
