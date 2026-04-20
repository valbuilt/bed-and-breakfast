export function renderAmenities() {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <h2>Amenities</h2>
    <ul class="amenity-list">
      <li class="flex">
        <img src="/icons/wifi.svg" alt="">
        <p>Fast Wifi</p>
      </li>
      <li class="flex">
        <img src="/icons/heater.svg" alt="">
        <p>Heater</p>
      </li>
      <li class="flex">
        <img src="/icons/washer2.svg" alt="">
        <p>Washer</p>
      </li>
      <li class="flex">
        <img src="/icons/book.svg" alt="">
        <p>Dedicated Workspace</p>
      </li>
      <li class="flex">
        <img src="/icons/book.svg" alt="">
        <p>Breakfast</p>
      </li>
    </ul>
  `;

  return wrapper;
}