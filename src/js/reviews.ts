import Swiper from "swiper";

import "swiper/css";
import { Navigation } from "swiper/modules";

export default function reviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      longSwipesRatio: 0.2,
      spaceBetween: 20,
      modules: [Navigation],
      navigation: {
        nextEl: element.querySelector<HTMLElement>(
          ".reviews__slider-arrow--next"
        ),
        prevEl: element.querySelector<HTMLElement>(
          ".reviews__slider-arrow--prev"
        ),
      },
    });
  });
}
