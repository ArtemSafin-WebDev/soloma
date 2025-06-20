import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initEventsAnimation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".events")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top+=40% bottom",
            scrub: true,
            end: "bottom bottom-=80",
            markers: false,
            snap: {
              snapTo: [0, 1],
              duration: 2,
            },
          },
        });
        tl.from(
          ".events__content",
          {
            duration: 3,
            ease: "power2.out",
            y: 400,
            autoAlpha: 0,
          },
          0
        );

        tl.from(".events__heading", {
          autoAlpha: 0,
          duration: 2,
          y: 50,
          ease: "power2.out",
        });
        tl.from(".events__slider-card", {
          xPercent: 50,
          duration: 4,
          ease: "power2.out",
          autoAlpha: 0,
          stagger: 0.6,
        });
      },
      element
    );
  });
}
