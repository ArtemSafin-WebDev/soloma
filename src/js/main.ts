import "virtual:svg-icons-register";
import "../scss/style.scss";
import faq from "./faq";
import art from "./art";
import team from "./team";
import reviews from "./reviews";
import events from "./events";
import intro from "./intro";
import fancybox from "./fancybox";
import smoothScrolling from "./smoothScrolling";
import choose from "./choose";

import initIntroAnimation from "./animation/introAnimation";
import initEstheticsAnimation from "./animation/estheticsAnimation";
import initWatchAnimation from "./animation/watchAnimation";
import initArtAnimation from "./animation/artAnimation";
import initVariantsAnimation from "./animation/variantsAnimation";
import initEventsAnimation from "./animation/eventsAnimation";
import initReviewsAnimation from "./animation/reviewsAnimation";
import initTeamAnimation from "./animation/teamAnimation";

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
  initEventsAnimation();
  initReviewsAnimation();
  initTeamAnimation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
