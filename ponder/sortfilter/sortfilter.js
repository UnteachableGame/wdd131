const nums = [12, 10, 8, 3];

// This will sort the numbers in order from smallest to greatest by the first digit as a
// normal sort() function.
console.log(nums.sort());

function compareFn(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

// This will sort the numbers in order using the compareFn function from smallest to greatest
// by the second digit first.
console.log(nums.sort(compareFn));

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// This uses the character coding to sort the words in the correct order.
let simpleSort = simpleList.sort();
console.log(simpleSort);

// This will create a new array by changing something in the array via making all the words
// be lower case
let lowerList = simpleList.map(function (fruit) {
    return fruit.toLowerCase();
});

let lowerSort = lowerList.sort();
let searchTerm = "an";
// This will create a new array based on if the array has a letter combination from the
// variable.
let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}

console.log(filterFruit);

// Sorting w/ Object arrays
const products = [
    {
        productName: "Wireless Mouse",
        price: 29.99
    },
    {
        productName: "Bluetooth Keyboard",
        price: 49.99
    },
    {
        productName: "Laptop Stand",
        price: 39.99
    }
];

let productSort = products.sort(compareFn);

console.log(productSort);

const animals = [
    {
        name: "Lion",
        traits: ["brave", "strong", "fierce", "wild"]
    },
    {
        name: "Elephant",
        traits: ["large", "gentle", "smart", "wild"]
    },
    {
        name: "Fox",
        traits: ["sly", "quick", "clever", "wild"]
    },
    {
        name: "Dog",
        traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
        name: "Cat",
        traits: ["quiet", "independent", "curious", "cuddly"]
    }
];

let query = "dog";
let filteredList = animals.filter(searchList);

function searchList(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);

let queryTrait = "cuddly";
let filteredTraits = animals.filter(function (item) {
    return item.traits.find((trait) => {
        trait.toLowerCase().includes(queryTrait.toLowerCase())
    });
});

console.log(filteredTraits);
