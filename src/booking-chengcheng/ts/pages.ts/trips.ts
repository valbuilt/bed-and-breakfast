import { getAllBookings } from "../api/getBookings.api";
import { editBooking } from "../api/patchBookings.api";
import { deleteBooking } from "../api/deleteBookings.api";
import { renderBookingCard } from "../components/bookingCard";
import { renderNav } from "../components/nav";
import { attachNavEvents } from "../features/nav.event";

document.body.prepend(renderNav());
attachNavEvents();

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

async function loadBookings() {
  if (!upcomingContent || !pastContent) {
    throw new Error("Trip containers not found in DOM");
  }

  try {
    const allBookings = await getAllBookings();
    const userBookings = allBookings.filter(
      (booking) => booking.userId === 888,
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingBookings = userBookings.filter(
      (booking) => new Date(booking.fromDate) > today,
    );
    const pastBookings = userBookings.filter(
      (booking) => new Date(booking.fromDate) <= today,
    );

    const upcomingCards = upcomingBookings.map((booking) =>
      renderBookingCard(booking),
    );
    const pastCards = pastBookings.map((booking) => renderBookingCard(booking));

    upcomingContent.replaceChildren(...upcomingCards);
    pastContent.replaceChildren(...pastCards);

  } catch (err) {
    console.log(err);
  }
}

loadBookings();
