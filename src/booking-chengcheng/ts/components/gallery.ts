import type { Room } from "../types/type";

export function renderGallery(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("gallery");

  room.img.forEach((src, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    if (index >= 5) item.classList.add("moreImages", "hidden");

    if (index === 4) {
      item.innerHTML = `
        <div class="more-photos">
          <img src="${src}" alt="room image">
          <button id="showMoreBtn">See all photos</button>
        </div>
      `;
    } else {
      item.innerHTML = `<img src="${src}" alt="room image">`;
    }

    wrapper.appendChild(item);
  });

  // "See all photos" button
  const showMoreBtn = wrapper.querySelector("#showMoreBtn");
  const moreImages = wrapper.querySelectorAll(".moreImages");

  if (showMoreBtn && moreImages.length > 0) {
    let isExpanded = false;

    showMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      moreImages.forEach((img) => img.classList.toggle("hidden", !isExpanded));
      showMoreBtn.textContent = isExpanded ? "Show less" : "See all photos";
    });
  }

  return wrapper;
}

 