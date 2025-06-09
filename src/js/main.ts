import "virtual:svg-icons-register";
import "../scss/style.scss";
import faq from "./faq";
import art from "./art";
import team from "./team";
import reviews from "./reviews";
import events from "./events";
import intro from "./intro";
import fancybox from "./fancybox";

document.addEventListener("DOMContentLoaded", () => {
  faq();
  art();
  team();
  reviews();
  events();
  intro();
  fancybox();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
