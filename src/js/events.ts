import Swiper from "swiper";

import "swiper/css";
import { Navigation } from "swiper/modules";

export default function events() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".events")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      longSwipesRatio: 0.2,
      spaceBetween: 0,
      modules: [Navigation],
      navigation: {
        nextEl: element.querySelector<HTMLElement>(
          ".events__slider-arrow--next"
        ),
        prevEl: element.querySelector<HTMLElement>(
          ".events__slider-arrow--prev"
        ),
      },
    });
  });
}
