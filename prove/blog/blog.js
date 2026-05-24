const books = [
    {
        "Date": "July 5, 2022",
        "Ages": "10-14",
        "Genre": "Fantasy",
        "Stars": "⭐⭐⭐⭐",
        "Title": "Septimus Heap Book One: Magyk",
        "Image": "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        "ImageAlt": "Septimus book cover.",
        "Description": "If you enjoy stories about seventh sons and magyk, this book is for you."
    }
];

const booksContainer = document.querySelector("#books-container");

books.forEach(function (item ) {
    let book = document.createElement("div");

    book.className = "book-container";
    book.innerHTML = `
        <hr>
        <p id="date">${item.Date}</p>
        <p id="age">${item.Ages}</p>
        <p id="genre">${item.Genre}</p>
        <p id="stars">${item.Stars}</p>
        <h2 id="title">${item.Title}</h2>
        <img id="image" src="${item.Image}" alt="${item.ImageAlt}">
        <p id="desc">${item.Description}</p>
    `;
    booksContainer.appendChild(book)
});