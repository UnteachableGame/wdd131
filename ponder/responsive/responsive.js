const menu = document.querySelector("nav");
const btn = document.querySelector(".menu-btn");

// This is an event listener that when clicked will change how to button is from 3 bars to an X.
btn.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hide");

    if (isHidden) {
        // If the menu is now hidden, the button should look like a Menu (remove X)
        btn.classList.remove("change");
    } else {
        // If the menu is now visible, the button should look like an X (add X)
        btn.classList.add("change");
    }
});