AOS.init({
  duration: 1000,
  easing: "ease-in-out",
});

//burger menu
const burger = document.querySelector(".burger");
const burgerLine = document.querySelector(".burger-line");
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  burgerMenu.classList.toggle("burger-menu-open");
  burgerLine.classList.toggle("burger-line-twist");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu-open");
    burgerLine.classList.remove("burger-line-twist");
  });
});
