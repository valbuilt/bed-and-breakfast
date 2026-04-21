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

      <textarea class="message" placeholder="Leave a message for your host."></textarea>
    </div>

    <div class="form-bottom">
      <div class="price">
        <h2 id="finalPrice">${room.pricePrNight} kr / night</h2>
      </div>
      <button id="confirmBtn" type="button" class="btn">Confirm booking</button>
    </div>
  `;

  return wrapper;
}

export function renderMobilBook(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("mobil-book", "hidden");

  wrapper.innerHTML = `
    <h2>${room.pricePrNight} kr / night</h2>
    <button id="openFormBtn" class="btn">Book</button>
  `;

  return wrapper;
}

export function renderModal() {
  const wrapper = document.createElement("dialog");
  wrapper.classList.add("dialog-window");

  wrapper.innerHTML = `
    <button id="dialog-close" class="dialog-close">x</button>
    <div class="dialog-content">
      <h2>🎉 Booking Confirmed!</h2>
      <p>We can't wait to host you -- see you soon!✨</p>
    </div>  
  `;

  return wrapper;
}