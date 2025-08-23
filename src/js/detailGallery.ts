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
  });
}
