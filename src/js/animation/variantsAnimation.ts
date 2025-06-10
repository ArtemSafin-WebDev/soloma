import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initVariantsAnimation() {
  gsap.from(".variants__item--left", {
    scrollTrigger: {
      trigger: ".variants",
      start: "top 30%",
      toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".variants__item--right", {
    scrollTrigger: {
      trigger: ".variants",
      start: "top 30%",
      toggleActions: "play none none none",
    },
    x: 100,
    opacity: 0,
    duration: 1,
  });
}
