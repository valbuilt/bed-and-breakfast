const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.querySelector(".nav-menu") as HTMLElement;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});



const upcomingBtn = document.getElementById("upcomingBtn") as HTMLButtonElement;
const pastBtn = document.getElementById("pastBtn") as HTMLButtonElement;

const upcomingContent = document.getElementById(
  "upcomingContent",
) as HTMLElement;
const pastContent = document.getElementById("pastContent") as HTMLElement;

if (upcomingBtn && pastBtn && upcomingContent && pastContent) {
  upcomingBtn.addEventListener("click", () => {
    upcomingBtn.classList.add("active");
    pastBtn.classList.remove("active");

    upcomingContent.classList.remove("hidden");
    pastContent.classList.add("hidden");
  });

  pastBtn.addEventListener("click", () => {
    pastBtn.classList.add("active");
    upcomingBtn.classList.remove("active");

    pastContent.classList.remove("hidden");
    upcomingContent.classList.add("hidden");
  });
} else {
  console.error("Toggle elements not found in DOM");
}
