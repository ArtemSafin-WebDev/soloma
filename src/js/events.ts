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
      /*on: {
        init: function() {
          updateActiveSlideWidth(this);
        },
        slideChange: function() {
          updateActiveSlideWidth(this);
        },
        resize: function() {
          updateActiveSlideWidth(this);
        },
      }*/
    });

    /*function updateActiveSlideWidth(swiper) {
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex; // текущий активный слайд

      // Сбрасываем ширину всех слайдов
      slides.forEach(slide => {
        slide.style.width = '';
      });

      // Устанавливаем увеличенную ширину для первого активного слайда
      if (slides[activeIndex]) {
        slides[activeIndex].style.width = 'calc(50% - 2rem)';
      }

      // Обновляем Swiper, чтобы применить изменения
      swiper.update();
    }*/

  });
}
