import Swiper from "swiper";
import gsap from "gsap";
import "swiper/css";

export default function art() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".art"));
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    mm.add("(max-width: 768px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        longSwipesRatio: 0.2,
        watchSlidesProgress: true,
      });

      return () => {
        instance?.destroy(true, true);
      };
    });
  });
}
