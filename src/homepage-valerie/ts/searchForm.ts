//this is where we store the user search data
let location;
let arrivalDate;
let departureDate;
let nrGuests;
let nrRooms;
let nrBeds;

const locationInput = document.getElementById("location-input");
const searchButton = document.getElementById("searchButton");
const arrivalDateInput = document.querySelector(".inputContainerDateLeft");
const departureDateInput = document.querySelector(".inputContainerDateRight");
const nrGuestsInput = document.getElementById("nr-guests");
const nrRoomsInput = document.getElementById("nr-rooms");
const nrBedsInput = document.getElementById("nr-beds");

searchButton.addEventListener("click", dataCollection);

function dataCollection(e) {
  e.preventDefault();

  location = locationInput.value;
  arrivalDate = arrivalDateInput.value;
  departureDate = departureDateInput.value;
  nrGuests = nrGuestsInput.value;
  nrRooms = nrRoomsInput.value;
  nrBeds = nrBedsInput.value;

  console.log("location", location);
  console.log("Arrival", arrivalDate);
  console.log("Departure", departureDate);
  console.log("nr of guests", nrGuests);
  console.log("nr of rooms", nrRooms);
  console.log("nr of beds", nrBeds);
}
