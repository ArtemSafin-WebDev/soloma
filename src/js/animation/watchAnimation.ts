import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initWatchAnimation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.watch',
      start: "top 30%",
      toggleActions: "play none none none" // play при входе, ничего при выходе
    }
  })
  .to('.watch__bg-image', { opacity: 1, duration: 1.2 })
  .to('.watch__heading', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
  .to('.watch__text', { opacity: 1, y: 0, duration: 1 }, '-=0.3');
}