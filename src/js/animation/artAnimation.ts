import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initArtAnimation() {
  const slogan = document.querySelector('.art__slogan');
  const slider = document.querySelector('.art__slider');
  gsap.set([slogan, slider], { opacity: 0, y: 20 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.art',
      start: "top 30%",
      toggleActions: "play none none none" // play при входе, ничего при выходе
    }
  });
  tl.to(slogan, { opacity: 1, y: 0, duration: 1.2 });
  tl.to(slider, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
  // tl.to('.watch__heading', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');
}