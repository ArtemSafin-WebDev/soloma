export default function tabsNav() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".tabs-nav")
  );
  elements.forEach((element) => {
    const selectBtn = element.querySelector<HTMLButtonElement>(
      ".tabs-nav__select-btn"
    );
    const selectBtnText = element.querySelector<HTMLElement>(
      ".tabs-nav__select-btn-text"
    );
    const links = Array.from(
      element.querySelectorAll<HTMLElement>(".tabs-nav__link")
    );
    selectBtn?.addEventListener("click", () => {
      element.classList.toggle("open");
    });
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (element.contains(target)) return;
      element.classList.remove("open");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
        if (selectBtnText)
          selectBtnText.textContent = link.textContent?.trim() ?? "";
        element.classList.remove("open");
      });
    });
  });
}
