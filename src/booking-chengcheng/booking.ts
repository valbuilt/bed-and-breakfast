import type { Room } from "./type";
import { getRoomById } from "./api";

const gallery = document.getElementById("gallery") as HTMLElement;
const roomName = document.getElementById("room-name") as HTMLElement;
const locationEl = document.getElementById("location") as HTMLElement;
const roomInfo = document.getElementById("room-info") as HTMLElement;
const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});

async function loadRoom(id: number) {
  try {
    const room: Room = await getRoomById(id);

    room.img.forEach((src, index) => {
      const div = document.createElement("div");
      div.classList.add("gallery-item");

      if (index >= 5) div.classList.add("moreImages", "hidden");

      if (index === 4) {
        div.innerHTML = `
          <div class="more-photos">
            <img src="${src}" alt="room image">
            <button id="showMoreBtn">See all photos</button>
          </div>
        `;
      } else {
        div.innerHTML = `<img src="${src}" alt="room image">`;
      }

      gallery.appendChild(div);
    });

    // Handle "See all photos" button
    const showMoreBtn = document.getElementById(
      "showMoreBtn",
    ) as HTMLButtonElement | null;
    const moreImages = document.querySelectorAll(".moreImages");

    if (showMoreBtn && moreImages.length > 0) {
      let isExpanded = false;

      showMoreBtn.addEventListener("click", () => {
        isExpanded = !isExpanded;
        moreImages.forEach((img) =>
          img.classList.toggle("hidden", !isExpanded),
        );
        showMoreBtn.textContent = isExpanded ? "Show less" : "See all photos";
      });
    }

    // Set room info
    roomName.textContent = room.name;
    locationEl.textContent = room.location;
    roomInfo.textContent = `${room.bedroom} bedroom · ${room.bed} bed · ${room.guests} guests`;
  } catch (error) {
    console.error("Failed to load room:", error);
    gallery.innerHTML = "<p>Failed to load room images.</p>";
  }
}

loadRoom(1);

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
