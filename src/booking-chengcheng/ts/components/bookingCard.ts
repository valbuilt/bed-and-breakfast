import type { Room } from "../types/type";

export function renderBookingCard(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("content");

  wrapper.innerHTML = `
    <article class="card">
      <div class="card-top">
        <h3 class="card-date">09.05.2026 - 14.05.2026</h3>
        <button class="btn-sec deleteBtn"}">Delete</button>
      </div>
      <div class="flex-m">
        <div class="card-img">
          <img src="${room.img[0]}" alt="room hero image">
        </div>
        <div class="card-info">
          <h3>${room.name}</h3>
          <div class="flex">
            <img src="/icons/map-pin.svg" alt="">
            <p>${room.locationShort}</p>
          </div>
          <div class="flex message-box">
            <p class="user-message">placeholder messages make a long ahahh lalala and very long  oh yeahhhhhhh</p>
            <button class="btn-ter editBtn">Edit</button>
          </div>  
        </div>
      </div>
    </article>  
  `;

  return wrapper;
}