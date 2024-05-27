const navMenu = document.querySelector(".nav-menu");
const navHamMenu = document.querySelector(".nav-hamburger-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navHamBtn = document.getElementById("nav-ham-btn");
const navCloseBtn = document.getElementById("nav-close-btn");
// Functions....
navHamBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
    navHamMenu.classList.add("hide");
})
function backToDefault() {
    navMenu.classList.remove("show");
    navHamMenu.classList.remove("hide");
}
navCloseBtn.addEventListener("click", backToDefault);
navLinks.forEach( button => {
    button.addEventListener("click", backToDefault);
})