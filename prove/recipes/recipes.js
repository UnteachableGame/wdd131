const recipes = [
    {
        imgSrc: "images/apple-crisp.jpg",
        imgAlt: "An apple crisp image.",
        title: "Apple Crisp",
        description: ""
    }
];

let recipesContainer = document.querySelector(".recipes-container");

recipes.forEach(function (recipeItem) {
    let recipe = document.createElement("div");

    recipe.className = "recipe-container";
    recipe.innerHTML = `
        <img src=${recipeItem.imgSrc} alt=${recipeItem.imgAlt}>
        <button type="submit">dessert</button>
        <h4>${recipeItem.title}</h4>
        <p>${recipeItem.description}</p>
        <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
        </span>
    `;
    recipesContainer.appendChild(recipe);
});