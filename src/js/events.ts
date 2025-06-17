import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function events() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".events")
  );
  elements.forEach((element) => {
    // const container = element.querySelector<HTMLElement>(".swiper");
    // if (!container) return;
    // new Swiper(container, {
    //   slidesPerView: "auto",
    //   speed: 600,
    //   longSwipesRatio: 0.2,
    //   spaceBetween: 0,
    //   modules: [Navigation],
    //   navigation: {
    //     nextEl: element.querySelector<HTMLElement>(
    //       ".events__slider-arrow--next"
    //     ),
    //     prevEl: element.querySelector<HTMLElement>(
    //       ".events__slider-arrow--prev"
    //     ),
    //   },
    // });
    const container = element.querySelector<HTMLElement>(
      ".events__slider-container"
    );

    const track = element.querySelector<HTMLElement>(".events__slider-track");
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".events__slider-slide")
    );
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".events__slider-card")
    );
    cards.forEach((card) =>
      card.addEventListener("click", (event) => event.preventDefault())
    );

    if (!container || !track || !slides.length) return;

    // Set container width as css variable on container element
    container.style.setProperty(
      "--container-width",
      container.offsetWidth + "px"
    );

    const snappingPoints = slides.map((slide) => -1 * slide.offsetLeft);

    console.log("SNAPPING POINTS", snappingPoints);

    Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: container,
      // snap: [0, -slides[0].offsetWidth],
      snap: snappingPoints,
    });
  });
}
