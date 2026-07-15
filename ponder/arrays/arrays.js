/* Array Methods:
Array Methods use a method to take each element in the array, run the callback method, and
    return different results based upon the method used.
+ .forEach(object) - will take each object and run the callback function with no return output.
+ .map(element) - will run the .forEach() method and return a new transformed array based on the
    conditions in the callback function.
+ .reduce(accumulator, current) - will run the .forEach method and condense the array elements into
    a single variable.
+ .filter(element) - will run the .forEach() method and return a new array with only elements that
    fit the conditions of the test of the function.
+ .indexOf() - will run the .forEach() method and return the index of the element
+ .sort(a, b) => (a - b) - will run the .forEach() method and return the same array sorted
    alphabetically as if all objects are strings (using ASCII codes as the order.)
 */


const steps = ["one", "two", "three"];

// This is a basic for each loop method from the array object.
steps.forEach(function (item) {
    // This is looping through every object in this array and printing out the string.
    console.log(item);
});

steps.forEach(showSteps);

// This is the same method but this an external function instead of a lambda function.
function showSteps(item) {
    // The item name can be changed to X or i for item instead of the string item.
    console.log(item);
}

//.map() - The map method

let myList = document.querySelector("#myList");
// .map(array) will return a new array list using the steps array list called before and "remap it".
// This .map() method will use whatever is returned in the function and "change" each object in the
// array into the new object. It will also create a non-mutable array list with the new array
// variable that is called. Ex. string.map() -> return int.Parse(string) would change each object
// into new array list of integers copied from the old array. It is like coping and pasting an array
// and changing the type or state of each of the items in the array.
const stepsHTML = steps.map(listTemplate);

function listTemplate(item) {
    // This ` is a back tick or a template literal. This lets us put HTML elements inside JS code.
    return `<li>${item}</li>`;
}

// This will add the new array list to the HTML that is being accessed by myList and returning
// the new li elements with the item as the variable for each repeated.
// The join will remove the commas from the list when displaying it.
myList.innerHTML = stepsHTML.join("");

let grades = ["A", "B", "C"];
let points;

// This will let you use a switch statement to return different values based upon different conditions.
let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            // This will make a pop-up alert on the website at the top to display the message
            // inside the method parenthesis.
            alert("not a valid grade");
    }
    return points;
}

//.reduce() - The reduce method

let totalPoints = gpaPoints.reduce(getTotal);
/* The .reduce() method takes in the objects of the array and does the function that will take
each of the items and does something with each of them to then return an accumulated result as a
new variable.
*/

// This adds everything up and returns the accumulated sum as the returned new variable object.
function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);
let gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);

//.filter() - The filter method

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
/* The filter method will make a non-mutable method that will only consist of the items in the array
the match the condition that is being returned. Those matched conditions are then made into a new
array. This will filter out results to give a new array list.
 */

const shortWords = words.filter(function (word) {
    return word.length < 6;
});
console.log(shortWords);

//.indexOf() - The index of method

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
//This will return the index of the value provided to the new variable.
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

//dynamic content
let studentContainer = document.querySelector("#student-container");

const students = [
    {
        last: 'Andrus',
        first: 'Aaron'
    },
    {
        last: 'Masa',
        first:'Manny'
    },
    {
        last: 'Tanda',
        first: 'Tamanda'
    }
];

students.forEach((student) => {
    let name = document.createElement("div");

    name.className = "format";

    let span1 = document.createElement("span");
    span1.textContent = student.first;
    name.appendChild(span1);

    let span2 = document.createElement("span");
    span2.textContent = student.last;
    name.appendChild(span2);

    let hr = document.createElement("hr");
    name.appendChild(hr);

    studentContainer.appendChild(name);
})