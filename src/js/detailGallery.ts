import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap/all";

export default function detailGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-detail-gallery")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const container = element.querySelector<HTMLElement>(".swiper");
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".detail-gallery__slider-card")
    );
    const wrappers = Array.from(
      element.querySelectorAll<HTMLElement>(
        ".detail-gallery__slider-mobile-wrapper-inner"
      )
    );
    if (!container) return;

    mm.add("(min-width: 641px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".detail-gallery__arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".detail-gallery__arrow--next"
          ),
        },
        pagination: {
          el: element.querySelector<HTMLElement>(".detail-gallery__pagination"),
          clickable: true,
          type: "bullets",
        },
      });
      return () => {
        instance.destroy();
      };
    });
    const originalParentElements = cards.map((card) => card.parentElement);
    mm.add("(max-width: 640px)", () => {
      cards.forEach((card, cardIndex) => {
        if ((cardIndex + 1) % 2 === 0) {
          wrappers[1].appendChild(card);
        } else {
          wrappers[0].appendChild(card);
        }
      });

      return () => {
        console.log("Returning to parent elements", originalParentElements);
        cards.forEach((card, cardIndex) => {
          originalParentElements[cardIndex]?.appendChild(card);
        });
      };
    });
  });
}
