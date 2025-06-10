import "virtual:svg-icons-register";
import "../scss/style.scss";
import faq from "./faq";
import art from "./art";
import team from "./team";
import reviews from "./reviews";
import events from "./events";
import intro from "./intro";
import fancybox from "./fancybox";
import initWatchAnimation from "./animation/watchAnimation";
import smoothScrolling from "./smoothScrolling";
import choose from "./choose";

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
  initWatchAnimation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
