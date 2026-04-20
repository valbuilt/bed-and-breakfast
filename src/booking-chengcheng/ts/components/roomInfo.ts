import type { Room } from "../types/type";

export function renderRoomInfo(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("room-info");
  wrapper.innerHTML = `
    <h1>${room.name}</h1>
    <div class="flex">
      <img src="/icons/map-pin.svg">
      <p>${room.location}</p>
    </div>
    <p>${room.bedroom} bedroom · ${room.bed} bed · ${room.guests} guests</p>
    `;
  return wrapper;  
}