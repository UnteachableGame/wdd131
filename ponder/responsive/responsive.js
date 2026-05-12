const menu = document.querySelector("nav");
const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", menuToggle);

function menuToggle() {
    menu.classList.toggle("hide");
    btn.classList.toggle("change");
}