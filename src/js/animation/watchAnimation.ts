import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initWatchAnimation() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".watch",
        start: "top 30%",
        markers: false,
        toggleActions: "play none none none", // play при входе, ничего при выходе
      },
    })
    .from(".watch__bg-image", { autoAlpha: 0, duration: 1.2 })
    .from(".watch__heading", { autoAlpha: 0, y: 100, duration: 0.8 }, "-=0.5")
    .from(".watch__text", { autoAlpha: 0, y: 100, duration: 1 }, "-=0.3");
}
