import { loadRoomInfo } from "./components/room-info";
import { loadDes } from "./components/description";
import { loadGallery } from "./components/gallery";

const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});

// -------------------

loadGallery(1);
loadRoomInfo(1);
loadDes(1);


// Handle booking-confirmation dialog
const confirmBooking = document.getElementById("confirm-booking") as HTMLElement;
const dialogWindow = document.getElementById("dialog-window") as HTMLDialogElement;
const dialogClose = document.getElementById("dialog-close") as HTMLElement;

confirmBooking.addEventListener("click", () => {
  dialogWindow.showModal();
  bookingForm.classList.remove("show");
  mobilBook.style.display = "flex";
});

dialogClose.addEventListener("click", () => {
  window.location.href = "/trips-chengcheng.html";
});
  

// handle mobil open booking form
const openForm = document.getElementById("open-form") as HTMLElement;
const bookingForm = document.getElementById("booking-form") as HTMLElement;
const mobilBook = document.querySelector(".mobil-book") as HTMLElement;

openForm.addEventListener("click", () => {
  bookingForm.classList.add("show");
  mobilBook.style.display = "none";
});
