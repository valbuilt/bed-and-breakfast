🏠 # STAY-w-Gruppe-4-Bed-Breakfast- 🏠

Forked CrudOps: https://github.com/valbuilt/crudops
Dette er vår fantastiske workspace hvor vi bygger verdens beste Bed &amp; Breakfast bestillingsplattformen.

Team members:
• Anders
• Chengcheng
• Valerie

🔹 Anders 🔹

signup.html
/src/sign-up-anders

🔹 Chengcheng 🔹

booking.html?id=1
booking.html?id=2
booking.html?id=3 trips.html
/src/booking-chengcheng

- I created signup & login function by using POST to create new user, and GET to login. (Built on existing signup UI by Anders)
- I added 3 room information to CrudOps, using GET to show room data on the booking pages.
- I did full CRUD for booking flow. POST booking from booking pages, GET bookings in trips.html, PATCH message to the host and DELETE booking in trips.html.

🔹 Valerie 🔹

index.html ---- not using API
src\homepage-valerie\index.ts (Chengcheng started with the Nav menu I added to it later) ---- not using API

pages\searchResults.html ---- /api/rooms, /api/favourites
pages\totalRoomOverview.html ---- /api/rooms, /api/favourites
pages\favourites.html ---- /api/favourites, /api/rooms

src\homepage-valerie\ts\searchForm.ts ---- not using API
src\homepage-valerie\ts\searchResults.ts ---- /api/rooms, /api/favourites
src\homepage-valerie\ts\totalRoomOverview.ts ---- /api/rooms, /api/favourites
src\homepage-valerie\ts\favourites.ts ---- /api/favourites, /api/rooms
src\homepage-valerie\css\style.css ---- not using API

Full Crud added by

- creation and display of favourites from 3 different pages (searchResults, favourites, totalRoomOverview) → posts to /api/favourites

- fetching all rooms to display them in totalRoomOverview and searchResults
  fetching and displaying only the logged-in user’s favourites

- updating a booking’s price and amount of guests via the filter panel in searchResults
  → patches /api/bookings

- removing a room from favourites → deletes from /api/favourites

and more
