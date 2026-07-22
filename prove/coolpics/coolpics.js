const images = document.querySelector("#images");
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".hide");

// This is a click event listener that will activate when the image element is clicked.
images.addEventListener('click', (e) => {
    const img = e.target;
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    modalImage.src = src.replace("sm", "full");
    modalImage.alt = alt;
    modal.showModal();
});

// This event listener closes the modal if the close button is clicked.
closeButton.addEventListener('click', () => {
    modal.close();
});

// This event listener closes the modal if the image that is shown is clicked.
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// This is the open and close the menu nav
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hide");
});