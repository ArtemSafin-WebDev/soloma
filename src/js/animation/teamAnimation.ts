import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initEventsAnimation() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".team"));
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top+=80 bottom",
            // scrub: true,
            end: "bottom+=80 bottom",
            markers: false,
            // snap: {
            //   snapTo: [0, 1],
            //   duration: 2,
            // },
          },
        });
        tl.from(
          ".team__content",
          {
            duration: 3,
            ease: "power2.out",
            y: 400,
            autoAlpha: 0,
          },
          0
        );

        tl.from(
          ".team__slogan",
          {
            autoAlpha: 0,
            duration: 2,

            ease: "power2.out",
          },
          1
        );

        tl.from(
          ".team__slider-card",
          {
            xPercent: 50,
            duration: 4,
            ease: "power2.out",
            autoAlpha: 0,
            stagger: 0.6,
          },
          "<"
        );

        tl.timeScale(3);
      },
      element
    );
  });
}
