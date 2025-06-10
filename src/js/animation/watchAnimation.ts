import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initWatchAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.watch',
      start: "top 30%",
      toggleActions: "play none none none" // play при входе, ничего при выходе
    }
  });
  tl.to('.watch__bg-image', { opacity: 1, duration: 1.2 });
  tl.to('.watch__text', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
  tl.to('.watch__heading', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

  tl.to('.watch__link', { opacity: 1, y: 0, duration: 0.5}, '+=0.2');
  tl.fromTo('.watch__decor--left',
      { x: 0, opacity: 0 },
      { x: -20, opacity: 1, duration: 0.7 }, '<'
  ).fromTo('.watch__decor--right',
      { x: 0, opacity: 0 },
      { x: 20, opacity: 1, duration: 0.7 }, '<'
  );
}