import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        const pinHeight = element.querySelector<HTMLElement>(
          ".choose__pin-height"
        )!;
        const titles = Array.from(
          element.querySelectorAll<HTMLElement>(".choose__title")
        );
        const pinInner =
          element.querySelector<HTMLElement>(".choose__pin-inner");
        const slideWidth = slides[0]?.offsetWidth;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinHeight,
            start: () => `top+=${pinInner?.offsetHeight} bottom`,
            end: () =>
              `top+=${pinHeight?.offsetHeight + pinHeight.offsetHeight} bottom`,
            scrub: true,
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

        slides.forEach((slide, index) => {
          const slidePosition = (index + 1) / slides.length;

          console.log("Slide position", slidePosition);
          tl.add(() => {
            slides.forEach((slide) => {
              const card = slide.querySelector(".choose__slider-card");
              card?.classList.remove("active");
            });
            const activeCard = slide.querySelector(".choose__slider-card");
            activeCard?.classList.add("active");
            titles.forEach((title) => title.classList.remove("active"));
            titles[index].classList.add("active");
          }, slidePosition * 0.2);
        });
      },
      element
    );
  });
}
