import type { Room } from "../type";
import { getRoomById } from "../api";

export async function loadDes(id: number) {
  const container = document.getElementById("description") as HTMLElement | null;

  if (!container) {
    console.error("Description container not found");
    return;
  }

  try {
    const room: Room = await getRoomById(id);

    container.innerHTML = `
      <h2>Description</h2>
      <p>${room.description}</p>
      <div class="host-description">
        <div class="flex-s host-title">
          <img src="${room.hostAvatar}">
          <h3>Hosted by ${room.hostName}</h3>
        </div>
        <p class="host-bio">${room.hostBio}</p>
        <button class="btn-sec">Request to book</button>
      </div>
    `;
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p>Failed to load description! (ㅠ﹏ㅠ)</p>`;
  }
}