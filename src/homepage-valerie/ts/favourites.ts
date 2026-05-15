import { attachNavEvents } from "../../booking-chengcheng/ts/features/nav.event.ts";
attachNavEvents();

const apiKey = import.meta.env.VITE_API_KEY;

const loggedInUser = JSON.parse(localStorage.getItem("currentUser") ?? "{}");

async function toggleFavourite(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  const roomId = Number(checkbox.id.replace("fav-", ""));

  if (checkbox.checked) {
    await fetch("http://localhost:3000/api/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
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
          Authorization: `Bearer ${apiKey}`,
        },
      });
      window.location.reload();
    }
  }
}

async function fetchFavourites() {
  const favouritesResponse = await fetch(
    "http://localhost:3000/api/favourites",
  );
  const allFavourites = await favouritesResponse.json();

  const userFavourites = allFavourites.filter(
    (fav: any) => fav.userId === loggedInUser.id,
  );

  const roomsResponse = await fetch("http://localhost:3000/api/rooms");
  const allRooms = await roomsResponse.json();

  const favouriteRooms = userFavourites
    .map((fav: any) => allRooms.find((room: any) => room.id === fav.roomId))
    .filter((room: any) => room !== undefined);

  const container = document.getElementById("favourites-container")!;

  document.querySelector("p")!.innerHTML =
    `${favouriteRooms.length} ${favouriteRooms.length === 1 ? "place" : "places"} saved`;

  container.innerHTML = favouriteRooms
    .map(
      (room: any) => `
      <a href="/pages/booking.html?id=${room.id}" class="roomCardLink">
        <div class="favouriteCard">
          <div class="resultCardImageContainer">
            <img class="favouriteCardPhoto" src="${room.img[0]}" alt="Photo of ${room.name}" />
            <label class="favouriteLabel" for="fav-${room.id}">
              <input type="checkbox" class="favouriteCheckbox" id="fav-${room.id}" />
              <img class="heartEmpty" src="/icons/heart-empty.svg" alt="Add to favourites" />
              <img class="heartFilled" src="/icons/heart-fill.svg" alt="Remove from favourites" />
            </label>
          </div>
          <div class="favouriteCardInfo">
            <h2>${room.name}</h2>
            <p>${room.location}</p>
            <p><img class="icon" src="/icons/Star.svg" alt="star rating icon" /> ${room.rating}</p>
            <p>${room.pricePrNight} kr / night</p>
          </div>
        </div>
      </a>
    `,
    )
    .join("");

  favouriteRooms.forEach((room: any) => {
    const checkbox = document.getElementById(
      `fav-${room.id}`,
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
      checkbox.addEventListener("change", toggleFavourite);
    }
  });
}

fetchFavourites();
