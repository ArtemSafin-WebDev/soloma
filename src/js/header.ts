export default function header() {
  const button = document.querySelector<HTMLButtonElement>(
    ".page-header__burger-btn"
  );
  button?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });

  const items = Array.from(
    document.querySelectorAll<HTMLElement>(".page-header__nav-list-item")
  );
  items.forEach((item) => {
    const link = item.querySelector<HTMLLinkElement>(".page-header__nav-link");
    const subMenu = item.querySelector<HTMLLinkElement>(".page-header__nav-submenu");

    if (!subMenu){
      return;
    }

    link?.addEventListener("click", (event) => {
      // if window width is less than 769px, then prevent default, use window.matchMedia
      if (window.matchMedia("(max-width: 768px)").matches) {
        event.preventDefault();
      }

      items.forEach((someItem) => {
        if (someItem !== item) someItem.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
}
