let hamburgerMenu = document.querySelector(".hamburger_menu");
let menu = document.querySelector(".nav_right-box");
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle('hamburger_active');
});
