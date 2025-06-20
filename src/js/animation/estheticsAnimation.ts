import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initEstheticsAnimation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".esthetics")
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
            markers: false,
          },
        });
        tl.from(".esthetics__image-wrapper", {
          autoAlpha: 0,
          duration: 0.8,
        });
        tl.from(
          ".esthetics__heading",
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          0
        );
        tl.from(
          ".esthetics__symbols-row",
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
        tl.from(
          ".esthetics__symbols-text",
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
      },
      element
    );
  });
}
