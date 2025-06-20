import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initIntroAnimation() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.from(".intro__left-top", {
          autoAlpha: 0,
          y: 20,
          duration: 0.8,
        });
        tl.from(
          ".intro__left-middle",
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
          },
          "+=0.1"
        );
        tl.from(
          ".intro__left-bottom",
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
          },
          "+=0.1"
        );
      },
      element
    );
  });
}
