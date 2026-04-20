import type { Room } from "../types/type";

export function renderMap(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("map");

  wrapper.innerHTML = `
    <h2>Location</h2>
    <p>${room.location}</p>
    <iframe src="${room.map}" loading="lazy" title="Map of ${room.location}"></iframe>
  `;

  return wrapper;
}