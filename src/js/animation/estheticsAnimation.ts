import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initEstheticsAnimation() {
// Создаем timeline для последовательной анимации
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.esthetics',
      start: "top 30%",
      toggleActions: "play none none none" // play при входе, ничего при выходе
    }
  });

  // Анимация заголовка
  tl.from('.esthetics__heading', {
    x: 100,        // Начальное положение справа
    opacity: 0,    // Начальная прозрачность
    duration: 0.8
  });

  // Анимация строки с символами (с задержкой 0.3s после заголовка)
  tl.from('.esthetics__symbols-row', {
    x: 100,
    opacity: 0,
    duration: 0.8
  }, '-=0.5'); // Начинается на 0.5s раньше окончания предыдущей анимации
}