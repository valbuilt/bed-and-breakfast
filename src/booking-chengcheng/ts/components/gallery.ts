import type { Room } from "../types/type";
import { getRoomById } from "../api/api";

export async function loadGallery(id: number) {
  const gallery = document.getElementById("gallery") as HTMLElement | null;

  if (!gallery) {
    console.error("gallery container not found");
    return;
  }

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

    // "See all photos" button
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
  } catch (err) {
    console.error(err);
    gallery.innerHTML = "<p>Failed to load gallery! ｡°(°.◜ᯅ◝°)°｡</p>";
  }
}
