import type { Booking } from "../types/type";

export function renderBookingCard(booking: Booking) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("content");

  wrapper.innerHTML = `
    <article class="card">
      <div class="card-top">
        <h3 class="card-date">${booking.fromDate} - ${booking.toDate}</h3>
        <button class="btn-sec deleteBtn" data-booking-id="${booking.id}">Delete</button>
      </div>
      <div class="flex-m">
        <div class="card-img">
          <img src="${booking.img}" alt="room hero image">
        </div>
        <div class="card-info">
          <h3>${booking.name}</h3>
          <div class="flex">
            <img src="/icons/map-pin.svg" alt="">
            <p>${booking.locationShort}</p>
          </div>
          <div class="flex message-box">
            <p class="user-message">${booking.message}</p>
            <button class="btn-ter editBtn" data-booking-id="${booking.id}">Edit</button>
          </div>  
        </div>
      </div>
    </article>  
  `;

  return wrapper;
}