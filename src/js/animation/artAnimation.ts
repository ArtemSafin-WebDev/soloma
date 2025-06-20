import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initArtAnimation() {
  const elements = gsap.utils.toArray<HTMLElement>(".art");
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50%",
            end: "bottom bottom",
            markers: false,
            scrub: true,
          },
        });

        tl.from(
          ".art__bg",
          {
            autoAlpha: 0,
            duration: 10,
          },
          0
        );

        tl.from(
          ".art__bg",
          {
            y: 200,
            duration: 10,
            ease: "power2.out",
          },
          0
        );

        tl.from(
          ".art__slogan-text",
          {
            yPercent: 100,
            duration: 7,
            ease: "power2.out",
          },
          3
        );

        tl.from(".art__slider-card", {
          xPercent: 50,
          duration: 5,
          autoAlpha: 0,
          ease: "power2.out",
          stagger: 1,
        });
      },
      element
    );
  });
}
