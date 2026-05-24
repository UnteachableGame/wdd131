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