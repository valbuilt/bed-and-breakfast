// Valerie Vasiljev

import { attachNavEvents } from "../../booking-chengcheng/ts/features/nav.event.ts";

document.addEventListener("DOMContentLoaded", () => {
  attachNavEvents();
});

const loggedInUser = JSON.parse(localStorage.getItem("currentUser") ?? "{}");

function createRoomCard(room: any) {
  return `
    <a href="/pages/booking.html?id=${room.id}" class="roomCardLink">
      <div class="resultCard">
        <div class="resultCardImageContainer">
          <img class="resultCardPhoto" src="${room.img[0]}" alt="Photo of ${room.name}" />
          <label class="favouriteLabel" for="room-${room.id}">
            <input type="checkbox" class="favouriteCheckbox" id="room-${room.id}" />
            <img class="heartEmpty" src="/icons/heart-empty.svg" alt="Add to favourites" />
            <img class="heartFilled" src="/icons/heart-fill.svg" alt="Remove from favourites" />
          </label>
        </div>
        <div class="resultCardInfo">
          <h2>${room.name}</h2>
          <p>${room.location}</p>
          <p><img class="icon" src="/icons/Star.svg" alt="star rating icon" /> ${room.rating}</p>
          <p>${room.pricePrNight} kr / night</p>
        </div>
      </div>
    </a>
  `;
}

async function toggleFavourite(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  const roomId = Number(checkbox.id.replace("room-", ""));

  if (checkbox.checked) {
    await fetch("http://localhost:3000/api/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer thisisit12345`,
      },
      body: JSON.stringify({
        userId: loggedInUser.id,
        roomId: roomId,
      }),
    });
  } else {
    const response = await fetch("http://localhost:3000/api/favourites");
    const allFavourites = await response.json();

    const favourite = allFavourites.find(
      (fav: any) => fav.userId === loggedInUser.id && fav.roomId === roomId,
    );

    if (favourite) {
      await fetch(`http://localhost:3000/api/favourites/${favourite.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer thisisit12345`,
        },
      });
    }
  }
}

async function fetchAllRooms() {
  const container = document.getElementById("results-container")!;
  container.innerHTML = '<div class="spinner"></div>';
  await new Promise((resolve) => setTimeout(resolve, 2000)); // added artificial delay so that we can see it spin
  const response = await fetch("http://localhost:3000/api/rooms");
  const data = await response.json();

  document.querySelector("h1")!.innerHTML = "All accommodations";
  document.querySelector("p")!.innerHTML =
    `${data.length} ${data.length === 1 ? "place" : "places"} available`;

  container.innerHTML = data.map((room: any) => createRoomCard(room)).join("");

  data.forEach((room: any) => {
    const favouriteInput = document.getElementById(`room-${room.id}`);
    favouriteInput?.addEventListener("change", toggleFavourite);
  });

  const favouritesResponse = await fetch(
    "http://localhost:3000/api/favourites",
  );
  const allFavourites = await favouritesResponse.json();

  const userFavourites = allFavourites.filter(
    (fav: any) => fav.userId === loggedInUser.id,
  );

  userFavourites.forEach((fav: any) => {
    const checkbox = document.getElementById(
      `room-${fav.roomId}`,
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  });
}

fetchAllRooms();
