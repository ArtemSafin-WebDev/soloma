import Swiper from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function choose() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".choose")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const slides = Array.from(
          element.querySelectorAll<HTMLElement>(".swiper-slide")
        )!;

        const titles = Array.from(
          element.querySelectorAll<HTMLElement>(".choose__title")
        );
        const pinInner =
          document.querySelector<HTMLElement>(".pin-spacer-sticky");
        const slideWidth = slides[0]?.offsetWidth;

        const openCardByIndex = (index: number) => {
          slides.forEach((slide) => {
            const card = slide.querySelector(".choose__slider-card");
            card?.classList.remove("active");
          });
          const activeCard = slides[index].querySelector(
            ".choose__slider-card"
          );
          activeCard?.classList.add("active");
          titles.forEach((title) => title.classList.remove("active"));
          titles[index].classList.add("active");
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinInner,
            start: "bottom bottom-=80",
            end: () => `bottom+=100% bottom-=80`,
            scrub: true,
            markers: false,
            pin: document.querySelector(".pin-spacer"),
            pinSpacing: true,
            onLeaveBack: () => {
              slides.forEach((slide) => {
                const card = slide.querySelector(".choose__slider-card");
                card?.classList.remove("active");
              });
              titles.forEach((title) => title.classList.remove("active"));
            },
            onUpdate: (self) => {
              const progress = self.progress;
              console.log("PROGRESS", progress);
              if (progress > 0.1 && progress < 0.5) {
                openCardByIndex(0);
              } else if (progress >= 0.5 && progress <= 1) {
                openCardByIndex(1);
              }
            },
          },
        });

        tl.to(".swiper", {
          x: () => {
            const marginRight = getComputedStyle(slides[0]).marginRight;
            return (
              -1 *
              (slideWidth * (slides.length - 1) +
                (slides.length - 1) * parseFloat(marginRight))
            );
          },
        });

        return () => {
          slides.forEach((slide) => {
            const card = slide.querySelector(".choose__slider-card");
            card?.classList.remove("active");
          });
          titles.forEach((title) => title.classList.remove("active"));
          titles[0].classList.add("active");
        };
      },
      element
    );

    mm.add("(max-width: 768px)", () => {
      const container = element.querySelector<HTMLElement>(".swiper");
      if (!container) return;
      const titles = Array.from(
        element.querySelectorAll<HTMLElement>(".choose__title")
      );

      const setActiveTitle = (index: number) => {
        titles.forEach((title) => title.classList.remove("active"));
        titles[index].classList.add("active");
      };
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        watchSlidesProgress: true,
        longSwipesRatio: 0.2,
        on: {
          init: function (swiper) {
            setActiveTitle(swiper.activeIndex);
          },
          slideChange: function (swiper) {
            setActiveTitle(swiper.activeIndex);
          },
        },
        init: false,
      });

      instance.init();

      return () => {
        instance.destroy();
        setActiveTitle(0);
      };
    });
  });
}
