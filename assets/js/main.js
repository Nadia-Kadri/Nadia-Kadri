const contactButtons = document.querySelectorAll(".contact");
const navbar = document.querySelector(".navbar");

// Event Listeners
contactButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "mailto:nadiagrace96@gmail.com";
  });
});

window.addEventListener("scroll", () => {
  window.scrollY === 0 ? navbar.classList.remove("border-bottom") : navbar.classList.add("border-bottom");
});