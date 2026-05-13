const params = new URLSearchParams(window.location.search);

const location = params.get("location") ?? "";
const arrival = params.get("arrival") ?? "";
const departure = params.get("departure") ?? "";
const guests = params.get("guests") ?? "";
const rooms = params.get("rooms") ?? "";
const beds = params.get("beds") ?? "";

console.log(location, arrival, departure, guests, rooms, beds);

function createRoomCard(room: any) {
  return `
    <a href="pages/booking.html?id=${room.id}" class="categoryLink">
      <div class="resultCard">
        <img class="resultCardPhoto" src="${room.img[0]}" alt="Photo of ${room.name}" />
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

async function fetchRooms() {
  const response = await fetch("http://localhost:3000/api/rooms");
  const data = await response.json();

  const filteredRooms = data.filter((room: any) => {
    const locationMatch = room.location
      .toLowerCase()
      .includes(location.toLowerCase());
    const guestsMatch = room.guests >= Number(guests);
    const bedsMatch = room.bed >= Number(beds);
    const bedroomsMatch = room.bedroom >= Number(rooms);

    return locationMatch && guestsMatch && bedsMatch && bedroomsMatch;
  });

  const container = document.getElementById("results-container")!;

  document.querySelector("h1")!.innerHTML = `Results for ${location}`;
  document.querySelector("p")!.innerHTML =
    `${filteredRooms.length} ${filteredRooms.length === 1 ? "room" : "rooms"} available`;

  filteredRooms.forEach((room: any) => {
    container.innerHTML += createRoomCard(room);
  });
}

fetchRooms();
