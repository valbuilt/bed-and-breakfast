import type { Room } from "../types/type";

export function renderBookingCard(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("content");

  wrapper.innerHTML = `
    <div class="card">
      <div class="card-top">
        <h3 class="card-date">09.05.2026 - 14.05.2026</h3>
        <button class="btn-sec">Edit</button>
        <button class="btn-ter">Delete</button>
      </div>
      <div class="flex-m">
        <div class="card-img">
          <img src="${room.img[0]}" alt="room hero image">
        </div>
        <div>
          <h3>${room.name}</h3>
          <div class="flex">
            <img src="/icons/map-pin.svg" alt="">
            <p>${room.location}</p>
          </div>
          <p>${room.bedroom} bedroom · ${room.bed} bed · ${room.guests} guests</p>
        </div>
      </div>
    </div>  
  `;

  return wrapper;
}