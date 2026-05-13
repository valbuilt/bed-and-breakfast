export function renderNav () {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <a href="/" class="logo">StayWell</a>
    <ul class="nav-menu">
      <li><a href="/pages/trips.html">Trips</a></li>
      <li><a href="/pages/signup.html">Login</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <img src="/icons/menu.svg" alt="">
    </button>
  `;

  return nav;
}