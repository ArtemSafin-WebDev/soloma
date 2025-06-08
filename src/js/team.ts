import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function team() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".team"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      longSwipesRatio: 0.2,
      modules: [Navigation],
      navigation: {
        nextEl: element.querySelector<HTMLElement>(".team__slider-arrow--next"),
        prevEl: element.querySelector<HTMLElement>(".team__slider-arrow--prev"),
      },
    });
  });
}
