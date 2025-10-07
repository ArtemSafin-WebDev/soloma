import Swiper from "swiper";
import "swiper/css";
import { Navigation, Thumbs } from "swiper/modules";

export default function certificateIntro() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".certificate-intro")
  );
  elements.forEach((element) => {
    const thumbsContainer = element.querySelector<HTMLElement>(
      ".certificate-intro__gallery-thumbs .swiper"
    );
    const mainContainer = element.querySelector<HTMLElement>(
      ".certificate-intro__gallery-main .swiper"
    );

    if (!mainContainer) return;

    let thumbsInstance: null | Swiper = null;
    if (thumbsContainer) {
      thumbsInstance = new Swiper(thumbsContainer, {
        slidesPerView: "auto",
        speed: 600,
        modules: [Navigation],
        direction: "vertical",
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".certificate-intro__gallery-thumbs-arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".certificate-intro__gallery-thumbs-arrow--next"
          ),
        },
      });
    }

    const mainInstance = new Swiper(mainContainer, {
      slidesPerView: 1,
      speed: 600,
      modules: [Thumbs],
      thumbs: {
        swiper: thumbsInstance,
        autoScrollOffset: 1,
      },
    });
  });
}
