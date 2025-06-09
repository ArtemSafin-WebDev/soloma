import Swiper from "swiper";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

function handleVideoPlayback(instance: Swiper) {
  const container = instance.el;
  // Pause all videos
  const allVideos = container.querySelectorAll<HTMLVideoElement>("video");
  allVideos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });

  // Play video in active slide
  const activeSlide = instance.slides[instance.activeIndex];
  const activeVideo = activeSlide.querySelector<HTMLVideoElement>("video");
  if (activeVideo) {
    activeVideo.play().catch((error: Error) => {
      console.log("Video autoplay failed:", error);
    });
  }
}

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const instance = new Swiper(container, {
      effect: "cards",
      grabCursor: true,
      speed: 600,
      longSwipesRatio: 0.2,
      modules: [EffectCards],
      init: false,
      cardsEffect: {
        slideShadows: true,
        perSlideRotate: 4,
        perSlideOffset: 4,
      },
      on: {
        slideChange: function (instance: Swiper) {
          handleVideoPlayback(instance);
        },
        init: function (instance: Swiper) {
          handleVideoPlayback(instance);
        },
      },
    });
    instance.init();
  });
}
