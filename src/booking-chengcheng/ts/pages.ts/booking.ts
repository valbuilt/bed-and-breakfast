import type { NewBooking } from "../types/type";

import { getRoomById } from "../api/getRooms.api";
import { postBooking } from "../api/postBookings.api";

import { renderNav } from "../components/nav";
import { attachNavEvents } from "../features/nav.event";

import { renderGallery } from "../components/gallery";
import { renderRoomInfo } from "../components/roomInfo";
import { renderDes } from "../components/description";
import { renderAmenities } from "../components/amenities";
import { renderReviews } from "../components/reviews";
import { renderMap } from "../components/map";
import { renderBookingForm, renderMobilBook, renderModal } from "../components/bookingForm";

// -------------------

document.body.prepend(renderNav());
attachNavEvents();


async function loadRoomPage(id: number) {
  const galleryContainer = document.getElementById("gallery");
  const roomInfoContainer = document.getElementById("room-info");
  const descriptionContainer = document.getElementById("description");
  const amenitiesContainer = document.getElementById("amenities");
  const reviewContainer = document.getElementById("reviews");
  const mapContainer = document.getElementById("map");
  const bookingFormContainer = document.getElementById("booking-form");
  const mobilBookContainer = document.getElementById("mobil-book");

  if (
    !galleryContainer ||
    !roomInfoContainer ||
    !descriptionContainer ||
    !amenitiesContainer ||
    !reviewContainer ||
    !mapContainer ||
    !bookingFormContainer ||
    !mobilBookContainer 
  ) {
    throw new Error("containers not found in DOM");
  }
  
  try {
    const room = await getRoomById(id);

    const gallery = renderGallery(room);
    const roomInfo = renderRoomInfo(room);
    const description = renderDes(room);
    const amenities = renderAmenities();
    const reviews = renderReviews(room);
    const map = renderMap(room);
    const bookingForm = renderBookingForm(room);
    const mobilBookFoot = renderMobilBook(room);
     const dialogWindow = renderModal();

    roomInfoContainer.replaceChildren(roomInfo);
    galleryContainer.replaceChildren(gallery);
    descriptionContainer.replaceChildren(description);
    amenitiesContainer.replaceChildren(amenities);
    reviewContainer.replaceChildren(reviews);
    mapContainer.replaceChildren(map);
    bookingFormContainer.replaceChildren(bookingForm);
    mobilBookContainer.replaceChildren(mobilBookFoot);
    document.body.appendChild(dialogWindow);

    const checkInInput = document.getElementById("checkin") as HTMLInputElement;
    const checkOutInput = document.getElementById("checkout") as HTMLInputElement;

    function calculatePrice() {
      const checkIn = new Date(checkInInput!.value);
      const checkOut = new Date(checkOutInput!.value);
      const totalNights =
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);

      if (totalNights <= 0) return;

      const totalPrice = totalNights * room.pricePrNight;

      const finalPrice = document.getElementById("finalPrice");
      finalPrice!.innerHTML = `
        <h2>${totalNights} nights · ${totalPrice} kr</h2>
      `;
    }

    checkInInput.addEventListener("change", calculatePrice);
    checkOutInput.addEventListener("change", calculatePrice);

    const message = document.querySelector(".message") as HTMLTextAreaElement;
    const openFormBtn = document.getElementById("openFormBtn") as HTMLButtonElement;
    const mobilBook = document.querySelector(".mobil-book") as HTMLElement;

    openFormBtn.addEventListener("click", () => {
      bookingForm.classList.add("show");
      mobilBook.style.display = "none";
    });

    const confirmBtn = document.getElementById("confirmBtn");
  
    const dialogClose = document.getElementById("dialog-close") as HTMLElement;

    confirmBtn?.addEventListener("click", () => {
      dialogWindow.showModal();
      bookingForm.classList.remove("show");
      mobilBook.style.display = "flex";

      const newBooking: NewBooking = {
        userId: 888,
        roomId: id,
        fromDate: checkInInput!.value,
        toDate: checkOutInput!.value,
        message: message.value,
      };

      postBooking(newBooking);
    });

    dialogClose.addEventListener("click", () => {
      window.location.href = "/pages/trips.html";
    });
    
  } catch (err) {
    console.log(err);
  }
}

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

loadRoomPage(id);





