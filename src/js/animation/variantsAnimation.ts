import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initVariantsAnimation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".variants")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
            toggleActions: "play none none none",
          },
        });
        tl.from(".variants__item--left", {
          x: -100,
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(".variants__item--right", {
          x: 100,
          autoAlpha: 0,
          duration: 1,
        });
      },
      element
    );
  });
}
