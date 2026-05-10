
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.querySelector("#main-container").border = "1px solid black";
        document.querySelector("body").style.backgroundColor = "#333333";
        document.querySelector("body").style.color = "white";
        document.querySelector("img").src = "images/byui-logo-dark.png";
        document.querySelector("h4").style.color = "#0791ed";
    } else {
        document.querySelector("#main-container").border = "1px solid white";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector("img").src = "images/byui-logo-blue.webp";
        document.querySelector("h4").style.color = "#035f9c";
    }
}
