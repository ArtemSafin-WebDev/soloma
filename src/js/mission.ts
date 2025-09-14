import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function mission() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".mission")
  );
  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
          scrub: true,
          end: "center center",
        },
      });
      tl.fromTo(
        ".mission__large-text",
        {
          backgroundImage: `linear-gradient(180deg, #FFF -31.6%, rgba(255, 255, 255, 0.00) 100%)`,
        },
        {
          backgroundImage: `linear-gradient(180deg, #FFF -31.6%, #fff 100%)`,
          duration: 1,
        }
      );
    }, element);
  });
}
