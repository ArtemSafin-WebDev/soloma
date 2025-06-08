import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function faq() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".faq"));
  elements.forEach((element) => {
    const accordions = element.querySelectorAll<HTMLElement>(".faq__accordion");
    accordions.forEach((accordion) => {
      const btn = accordion.querySelector<HTMLButtonElement>(
        ".faq__accordion-btn"
      );
      const dropdown = accordion.querySelector<HTMLElement>(
        ".faq__accordion-dropdown"
      );

      btn?.addEventListener("click", (event) => {
        event.preventDefault();
        accordions.forEach((someAccordion) => {
          if (someAccordion === accordion) return;
          someAccordion.classList.remove("active");
        });
        accordion.classList.toggle("active");
      });

      dropdown?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
