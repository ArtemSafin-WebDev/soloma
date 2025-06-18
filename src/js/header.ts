export default function header() {
  const button = document.querySelector<HTMLButtonElement>(
    ".page-header__burger-btn"
  );
  button?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });
}
