import "virtual:svg-icons-register";
import "../scss/style.scss";
import faq from "./faq";
import art from "./art";
import team from "./team";
import reviews from "./reviews";

document.addEventListener("DOMContentLoaded", () => {
  faq();
  art();
  team();
  reviews();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
