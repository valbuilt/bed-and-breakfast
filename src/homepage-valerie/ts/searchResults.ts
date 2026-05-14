const params = new URLSearchParams(window.location.search);

const searchLocation = params.get("location") ?? "";
const arrival = params.get("arrival") ?? "";
const departure = params.get("departure") ?? "";
const guests = params.get("guests") ?? "";
const rooms = params.get("rooms") ?? "";
const beds = params.get("beds") ?? "";

console.log(searchLocation, arrival, departure, guests, rooms, beds);

const loggedInUser = JSON.parse(localStorage.getItem("currentUser") ?? "{}");
console.log(loggedInUser);

function createRoomCard(room: any) {
  return `
    <a href="pages/booking.html?id=${room.id}" class="categoryLink">
      <div class="resultCard">
        <div class="resultCardImageContainer">
          <img class="resultCardPhoto" src="${room.img[0]}" alt="Photo of ${room.name}" />
          <label class="favouriteLabel" for="${room.id}">
            <input type="checkbox" class="favouriteCheckbox" id="${room.id}" />
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
  const roomId = Number(checkbox.id);

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
    console.log("added to favourites");
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
      console.log("removed from favourites");
    }
  }
}

async function fetchRooms() {
  const response = await fetch("http://localhost:3000/api/rooms");
  const data = await response.json();

  const filteredRooms = data.filter((room: any) => {
    const searchLocationMatch = room.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    const guestsMatch = room.guests >= Number(guests);
    const bedsMatch = room.bed >= Number(beds);
    const bedroomsMatch = room.bedroom >= Number(rooms);

    return searchLocationMatch && guestsMatch && bedsMatch && bedroomsMatch;
  });

  const container = document.getElementById("results-container")!;

  document.querySelector("h1")!.innerHTML = `Results for ${searchLocation}`;
  document.querySelector("p")!.innerHTML =
    `${filteredRooms.length} ${filteredRooms.length === 1 ? "place" : "places"} available`;

  filteredRooms.forEach((room: any) => {
    container.innerHTML += createRoomCard(room);
    const favouriteInput = document.getElementById(room.id);
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
      String(fav.roomId),
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  });
}

async function myFavourites() {
  console.log("favourites called");
  const response = await fetch("http://localhost:3000/api/favourites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer thisisit12345`,
    },
    body: JSON.stringify({
      favourites: true,
    }),
  });
  console.log("end of favourite function");
}

fetchRooms();
