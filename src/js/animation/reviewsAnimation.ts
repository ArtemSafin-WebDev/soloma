import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initEventsAnimation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top+=80 bottom",
            scrub: true,
            end: "bottom bottom-=80",
            markers: false,
            snap: {
              snapTo: [0, 1],
              duration: 2,
            },
          },
        });
        tl.from(
          ".reviews__content",
          {
            duration: 3,
            ease: "power2.out",
            y: 400,
            autoAlpha: 0,
          },
          0
        );
        tl.from(
          ".reviews__slide-card",
          {
            xPercent: 50,
            duration: 3,
            ease: "power2.out",
            autoAlpha: 0,
          },
          2
        );

        tl.from(
          ".reviews__slide-image-wrapper",
          {
            duration: 3,
            ease: "power2.out",
            autoAlpha: 0,
          },
          "<"
        );
      },
      element
    );
  });
}
