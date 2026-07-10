cards = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    imgSrc: "images/snortleblat.webp",
    imgAlt: "an image of snortleblat",
    sections: [
        {level: 5, health: 100}
    ],
    attacked: function () {
        this.sections[0].health -= 20;
        renderSections();
    },
    levelUp: function () {
        this.sections[0].level++;
        renderSections();
    }
};

// Changes the display of the level and health with its new variables that were stored.
function renderSections() {
    const data = cards.sections[0];

    const ifLevel = document.querySelector("#level");
    const ifHealth = document.querySelector("#health");

    if (ifLevel) ifLevel.textContent = data.level;
    if (ifHealth) ifHealth.textContent = data.health;
}

// Updating the variables of level and health and storing the new variable.
document.querySelector("#attacked").addEventListener("click", function () {
    cards.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
    cards.levelUp();
});
