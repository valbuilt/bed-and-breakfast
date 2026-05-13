

let location;
let arrivalDate;
let departureDate;
let nrGuests;
let nrRooms;
let nrBeds;

// const hamburger = document.getElementById("hamburger") as HTMLElement;
let input = document.getElementById("location-input");
let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", collectLocation);

function collectLocation(e) {
  //   let input = "Vatican is working";
  e.preventDefault();

  const location (document.getElementById("location-input")as HTMLInputElement).value.trim();
  const dates (document.querySelector(".inputContainerDateLeft") as HTMLInputElement).value;
  //should I split into arrival and departure dates? 
  const nrGuests //
  // e.target.value;
  // console.log("click is working");
}

// collectLocation();



