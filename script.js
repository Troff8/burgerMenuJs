const body = document.querySelector("body");
if (body.clientWidth < 750) {
  body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", () => {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  body.classList.add("_pc");
}
// меню бургер

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", () => {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
