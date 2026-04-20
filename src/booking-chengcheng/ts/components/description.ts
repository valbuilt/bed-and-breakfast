import type { Room } from "../types/type";

export function renderDes(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("description");

  wrapper.innerHTML = `
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
  
  return wrapper;
}
