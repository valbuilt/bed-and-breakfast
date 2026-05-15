// Valerie Vasiljev

let location: string;
let arrivalDate: string;
let departureDate: string;
let nrGuests: string;
let nrRooms: string;
let nrBeds: string;

const locationInput = document.getElementById(
  "location-input",
) as HTMLInputElement;
const searchButton = document.getElementById(
  "searchButton",
) as HTMLInputElement;
const arrivalDateInput = document.querySelector(
  ".inputContainerDateLeft",
) as HTMLInputElement;
const departureDateInput = document.querySelector(
  ".inputContainerDateRight",
) as HTMLInputElement;
const nrGuestsInput = document.getElementById("nr-guests") as HTMLInputElement;
const nrRoomsInput = document.getElementById("nr-rooms") as HTMLInputElement;
const nrBedsInput = document.getElementById("nr-beds") as HTMLInputElement;

const form = document.querySelector("form") as HTMLFormElement;
form?.addEventListener("submit", dataCollection);

function dataCollection(e: Event) {
  console.log("search clicked");
  e.preventDefault();

  location = locationInput?.value;
  arrivalDate = arrivalDateInput?.value;
  departureDate = departureDateInput?.value;
  nrGuests = nrGuestsInput?.value;
  nrRooms = nrRoomsInput?.value;
  nrBeds = nrBedsInput?.value;

  const params = new URLSearchParams({
    location: location,
    arrival: arrivalDate,
    departure: departureDate,
    guests: nrGuests,
    rooms: nrRooms,
    beds: nrBeds,
  });

  window.location.href = `/pages/searchResults.html?${params.toString()}`;
}
