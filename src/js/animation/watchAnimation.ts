import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initWatchAnimation() {
  const elements = gsap.utils.toArray<HTMLElement>(".watch");

  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
            end: "bottom bottom",
            markers: false,
            scrub: true,
          },
        });

        tl.from(
          ".watch__bg",
          {
            autoAlpha: 0,
            duration: 10,
          },
          0
        );

        tl.from(
          ".watch__bg",
          {
            y: 200,
            duration: 10,
            ease: "power2.out",
          },
          0
        );

        tl.from(
          ".watch__text",
          {
            y: 20,
            autoAlpha: 0,
            duration: 6,
            ease: "power2.out",
          },
          7
        );

        tl.addLabel("afterText", "<+=0.3");

        tl.from(
          ".watch__link",
          {
            autoAlpha: 0,
            duration: 7,
            y: 50,
            ease: "power2.out",
          },
          "afterText"
        );

        tl.from(
          ".watch__decor--left",
          {
            x: 40,
            autoAlpha: 0,
            duration: 4,
            ease: "power2.out",
          },
          "<+=3"
        );
        tl.from(
          ".watch__decor--right",
          {
            x: -40,
            autoAlpha: 0,
            duration: 4,
            ease: "power2.out",
          },
          "<"
        );

        tl.from(
          ".watch__heading",
          {
            y: 100,
            autoAlpha: 0,
            duration: 4,
            ease: "power2.out",
          },
          "<"
        );
      },
      element
    );
  });
}
