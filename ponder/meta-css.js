// variables vs constants.
// constants are variables that never change

// constant
const PI = 3.14;

// variable
let radius = 3;

// assignment variable
let area = radius * radius * PI;

/* print statement anatomy
    console.log(object);
    class.method(parameter);
 */
console.log(area); // log with give the automatic print statement type out.

// you aren't able to make this happen
// const PI = 6;

// you can turn a variable into a constant
radius = 20;
area = Math.pow(PI, radius);
console.log(area);

// type coercion
const one = 1;
const two = "2";

// JavaScript will be flexible and let the string "2" be a int datatype when doing calculations.
let result = one * two;
console.log(result);

// this is actually concatenation.
result = one + Number(two);
// Number(string) - will cast a string to a number

let course = "CSE131"; // global scope
let student;
if (student == null) {
    student = "John";
    console.log(course); // works just fine, course is global
    console.log(student); // works just fine, it's being accessed within the block
}
console.log(course); // works fine, course is global
console.log(student); // does not work, can't access a block variable outside the block
