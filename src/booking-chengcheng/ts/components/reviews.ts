import type { Room } from "../types/type";

export function renderReviews(room: Room) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("reviews");

  wrapper.innerHTML = `
    <h2>Reviews</h2>
    <div class="review-info">
      <div class="flex">
        <img src="/icons/star.svg" alt="">
        <p>${room.rating}</p>
      </div>
      <a>Read all reviews</a>
    </div>

    <ul class="review-swipe">
      ${room.reviews.map((review) => `
        <li class="review">
          <div class="flex-m">
            <img src="${review.userAvatar}" alt="${review.username}'s avatar">
            <div>
              <p>${review.username}</p>
              <h5>${review.date}</h5>
            </div>
          </div>
          <h6>"${review.comment}"</h6>
        </li>
      `)
      .join("")}
    </ul>
    `;

    return wrapper;

}