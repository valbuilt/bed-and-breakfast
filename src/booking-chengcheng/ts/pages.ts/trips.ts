import { getRoomById } from "../api/getRooms.api";
import { getBookingById } from "../api/getBookings.api";
import { renderBookingCard } from "../components/bookingCard";


const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});

// ---------------------
const upcomingContent = document.getElementById("upcomingContent");
const pastContent = document.getElementById("pastContent");
const upcomingBtn = document.getElementById("upcomingBtn");
const pastBtn = document.getElementById("pastBtn");

if (!upcomingContent || !pastContent || !upcomingBtn || !pastBtn) {
  console.error("Toggle elements not found in DOM");
} else {
  const toggleView = (showUpcoming: boolean) => {
    upcomingBtn.classList.toggle("active", showUpcoming);
    pastBtn.classList.toggle("active", !showUpcoming);

    upcomingContent.classList.toggle("hidden", !showUpcoming);
    pastContent.classList.toggle("hidden", showUpcoming);
  };

  upcomingBtn.addEventListener("click", () => toggleView(true));
  pastBtn.addEventListener("click", () => toggleView(false));
}

// -----------------------

const userId = localStorage.getItem("id")

// -----------------------

async function loadBookingCards(id: number) {
  if (!upcomingContent) {
    throw new Error("upcomig trips not found in DOM");
  }

  try {
    const room = await getRoomById(id);
    const booking = await getBookingById(101);

    const bookingCard = renderBookingCard(room);
    
    upcomingContent.replaceChildren(bookingCard);

  } catch (err) {
    console.log(err);
  }
}

loadBookingCards(1);




