import type { Room } from "../types/type";

export function renderRoomInfo(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("room-info");
  wrapper.innerHTML = `
    <h1>${room.name}</h1>
    <div class="flex">
      <img src="/icons/map-pin.svg" alt="">
      <p>${room.location}</p>
    </div>
    <p>
      ${room.bedroom} ${room.bedroom > 1 ? "bedrooms" : "bedroom"} ·
      ${room.bed} ${room.bed > 1 ? "beds" : "bed"} ·
      ${room.guests} ${room.guests > 1 ? "guests" : "guest"}
    </p>
    `;
  return wrapper;  
}