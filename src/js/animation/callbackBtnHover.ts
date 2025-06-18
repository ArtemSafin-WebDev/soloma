import gsap from "gsap";

import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

export default function callbackBtnHover() {
  const elements = Array.from(
    document.querySelectorAll<HTMLLinkElement>(".js-callback-btn-hover")
  );
  elements.forEach((element) => {
    const text = element.querySelector<HTMLElement>(
      ".page-header__callback-btn-text"
    );
    const icon = element.querySelector<HTMLElement>(
      ".page-header__callback-btn-icon"
    );
    element.addEventListener("mouseenter", () => {
      const state = Flip.getState([text, icon]);
      element.classList.add("hovered");
      Flip.from(state, {
        duration: 0.6,
      });
    });

    element.addEventListener("mouseleave", () => {
      const state = Flip.getState([text, icon]);
      element.classList.remove("hovered");
      Flip.from(state, {
        duration: 0.6,
      });
    });
  });
}
