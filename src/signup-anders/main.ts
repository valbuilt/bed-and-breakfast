// src/signup-anders/main.ts
import "./transition.ts";
import "../booking-chengcheng/ts/features/signUpLogIn";

const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});
