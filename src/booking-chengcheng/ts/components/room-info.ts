import type { Room } from "../types/type";
import { getRoomById } from "../api/api";

export async function loadRoomInfo(id: number) {
  const container = document.getElementById("room-info") as HTMLElement | null;

  if (!container) {
    console.error("Room container not found");
    return;
  }

  try {
    const room: Room = await getRoomById(id);

    container.innerHTML = `
      <h1>${room.name}</h1>
      <div class="flex">
        <img src="/icons/map-pin.svg">
        <p>${room.location}</p>
      </div>
      <p>${room.bedroom} bedroom · ${room.bed} bed · ${room.guests} guests</p>
    `;
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p>Failed to load room-info! .·°՞(≧□≦)՞°·.</p>`;
  }
}
