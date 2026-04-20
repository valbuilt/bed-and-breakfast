import type { Room } from "../types/type";

export function renderBookingForm(room: Room) {
  const wrapper = document.createElement("form");
  wrapper.classList.add("booking-form");

  wrapper.innerHTML = `
    <div class="form-top">
      <h2>Book your stay</h2>

      <label for="checkin">Check-in-date</label>
      <input type="date" id="checkin">
    
      <label for="checkout">Check-out-date</label>
      <input type="date" id="checkout">
    </div>

    <div class="form-bottom">
      <div class="price">
        <h2>${room.pricePrNight} kr / night</h2>
      </div>
      <button id="confirm-booking" type="button" class="btn">Confirm booking</button>
    </div>
  `;

  return wrapper;

}