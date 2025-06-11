import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initEventsAnimation() {
  const trigger = document.querySelector(".events")
  const items = document.querySelectorAll(".reviews__heading, .events__slider")

  gsap.set(items, { y: 40, opacity: 0 })

  items?.forEach((item, index) => {
    gsap.to(item, {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: trigger,
        start: "top 40%"
      }
    })
  })
}
