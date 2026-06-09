const menu = document.querySelector("nav");
const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", menuToggle);

function menuToggle() {
    const isHidden = menu.classList.toggle("hide");

    if (isHidden) {
        // If the menu is now hidden, the button should look like a Menu (remove X)
        btn.classList.remove("change");
    } else {
        // If the menu is now visible, the button should look like an X (add X)
        btn.classList.add("change");
    }
}