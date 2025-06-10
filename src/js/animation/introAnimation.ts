import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initIntroAnimation() {
  const topLine = document.querySelector('.intro__left-top');
  const middleLine = document.querySelector('.intro__left-middle');
  const bottomLine = document.querySelector('.intro__left-bottom');

  gsap.set([topLine, middleLine, bottomLine], { opacity: 0, y: 20 });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(topLine, { opacity: 1, y: 0, duration: 0.8 })
    .to(middleLine, { opacity: 1, y: 0, duration: 0.8 }, "+=0.1")
    .to(bottomLine, { opacity: 1, y: 0, duration: 0.8 }, "+=0.1"); // задержка 0.3 сек после предыдущей анимации
}