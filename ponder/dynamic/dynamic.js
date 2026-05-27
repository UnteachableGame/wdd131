const student = [
    {
        last: "Tinny",
        first: "Tyler"
    },
    {
        last: "Jackson",
        first: "Daniel"
    },
    {
        last: "McClure",
        first: "Eldon"
    }
];

let container = document.querySelector("#student_container");

student.forEach(function (item) {
    let name = document.createElement("div");

    name.className = "format";
    name.innerHTML = `
        <p class='details'>${item.first} </p> 
        <p class='details'>${item.last} </p>
        <hr>
    `;
    container.appendChild(name);
});

const pets = ["cat", "dog", "bird"]; // Literal array
const animals = new Array("pig", "goat", "sheep"); // Constructor array

pets.push("lizard"); // This appends lizard to the array.
pets.unshift("beginning"); // This appends an element to the beginning of the array.
pets.pop(); // This removes last element.
pets.shift(); // This removes the first element.