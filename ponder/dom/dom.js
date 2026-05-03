let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})

//
// let title = document.querySelector("h1"); // This targets the h1 element tag
// console.log(title); // This prints the object to the console.
//
// title.textContent = "Web Page Components"; // This changes the text of the element.
//
// let topics = document.querySelector("#topics");
// topics.style.color = "red"; // This changes every element of text in the topics div to the color red.
//
// const wrapper = document.getElementById("content");
// wrapper.style.backgroundColor = "lightblue"; // This is the same as the color.
//
// let list = document.querySelector(".list"); // query will find the first element in the list.
// list.style.border = "3px solid black"; // This is the same syntax as the CSS element string.
//
// let para = document.querySelector("p");
// para.style.fontSize = "2em";
// para.classList.add("background");
//
// const image = document.querySelector("img");
// // This will change the src image source to a different image.
// image.setAttribute("src", "images/new_logo.jpeg");
//
const dropDown = document.querySelector("#webdevlist");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");
// dropDown.togg
//
dropDown.addEventListener("change", function() {
    html.style.color = "purple";
    css.style.color = "purple";
    js.style.color = "purple";

    let codeValue = dropDown.value; // This is getting one of the options in the dropdown
    document.getElementById(codeValue).style.color = "red";
});
