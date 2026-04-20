import { renderRoomInfo } from "../components/roomInfo";
import { renderDes } from "../components/description";
import { renderGallery } from "../components/gallery";
import { renderAmenities } from "../components/amenities";
import { renderReviews } from "../components/reviews";
import { renderMap } from "../components/map";
import { renderBookingForm } from "../components/bookingForm";
import { getRoomById } from "../api/getRooms.api";

const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});

// -------------------

localStorage.setItem("id", "1");

// -------------------
async function loadRoomPage(id: number) {
  const roomInfoContainer = document.getElementById("room-info");
  const galleryContainer = document.getElementById("gallery");
  const descriptionContainer = document.getElementById("description");
  const amenitiesContainer = document.getElementById("amenities");
  const reviewContainer = document.getElementById("reviews");
  const mapContainer = document.getElementById("map");
  const bookingFormContainer = document.getElementById("booking-form");

  if (
    !roomInfoContainer || 
    !galleryContainer || 
    !descriptionContainer ||
    !amenitiesContainer || 
    !reviewContainer ||
    !mapContainer ||
    !bookingFormContainer
  ) {
    throw new Error ("containers not found in DOM");
  }
  
  try {
    const room = await getRoomById(id);

    const roomInfo = renderRoomInfo(room);
    const gallery = renderGallery(room);
    const description = renderDes(room);
    const amenities = renderAmenities();
    const reviews = renderReviews(room);
    const map = renderMap(room);
    const bookingForm = renderBookingForm(room);
    
    roomInfoContainer.replaceChildren(roomInfo);
    galleryContainer.replaceChildren(gallery);
    descriptionContainer.replaceChildren(description);
    amenitiesContainer.replaceChildren(amenities);
    reviewContainer.replaceChildren(reviews);
    mapContainer.replaceChildren(map);
    bookingFormContainer.replaceChildren(bookingForm);
  } catch (err) {
    console.log(err);
  }
}

loadRoomPage(1);


// Handle booking-confirmation dialog
const confirmBooking = document.getElementById(
  "confirm-booking",
) as HTMLElement;
const dialogWindow = document.getElementById(
  "dialog-window",
) as HTMLDialogElement;
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

// ----------------
