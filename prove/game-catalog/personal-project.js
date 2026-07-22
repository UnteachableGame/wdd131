games = [
    {
        imgSrc: "images/minecraft.png",
        imgAlt: "Minecraft Game Header",
        title: "Minecraft",
        platforms: ["Xbox", "PlayStation", "Nintendo Switch", "PC", "Mobile", "Virtual Reality"],
        description: "A sandbox game continuously expanded by updates, featuring infinite block-building, survival mechanics, and unique new structures like abandoned campsites and fresh overworld biomes.",
        score: 5
    },
    {
        imgSrc: "images/halo.jpeg",
        imgAlt: "Halo Game Header",
        title: "Halo",
        platforms: ["Xbox", "PlayStation", "PC"],
        description: "A ground-up modernization of the original game that offers new missions, 4-player co-op, and enhanced graphics.",
        score: 4
    },
    {
        imgSrc: "images/gta6.jpeg",
        imgAlt: "Grand Theft Auto 6 Game Header",
        title: "Grand Theft Auto 6",
        platforms: ["Xbox", "PlayStation", "PC"],
        description: "An expansive open-world game set in a highly detailed, modern-day version of Vice City and the surrounding state of Leonida.",
        score: 4
    },
    {
        imgSrc: "images/rocketLeague.jpeg",
        imgAlt: "Rocket League Game Header",
        title: "Rocket League",
        platforms: ["Xbox", "PlayStation", "PC", "Nintendo Switch"],
        description: "A fast-paced, physics-based vehicular soccer game where players master high-skill aerial maneuvers in competitive cross-platform matches.",
        score: 4
    },
    {
        imgSrc: "images/codBlackOps.jpeg",
        imgAlt: "Call Of Duty: Black Ops 6 Game Header",
        title: "Call Of Duty: Black Ops 6",
        platforms: ["Xbox", "PlayStation", "PC"],
        description: "A 90s-era spy thriller featuring a rogue CIA campaign, traditional round-based Zombies, and an innovative \"Omnimovement\" system that lets players sprint and dive in any direction.",
        score: 4
    },
    {
        imgSrc: "images/battlefield6.jpeg",
        imgAlt: "Battlefield 6 Game Header",
        title: "Battlefield 6",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "A massive-scale 128-player multiplayer battles loaded with extreme environmental destruction and dynamic, evolving warzones.",
        score: 4
    },
    {
        imgSrc: "images/apexLegends.jpeg",
        imgAlt: "Apex Legends Game Header",
        title: "Apex Legends",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"], // need
        description: "",
        score: 4
    },
    {
        imgSrc: "images/destiny2.jpeg",
        imgAlt: "Destiny 2 Game Header",
        title: "Destiny 2",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "",
        score: 4
    },
    {
        imgSrc: "images/overwatch.jpeg",
        imgAlt: "Overwatch Game Header",
        title: "Overwatch",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "",
        score: 4
    },
    {
        imgSrc: "images/valorant.jpeg",
        imgAlt: "Valorant Game Header",
        title: "Valorant",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "",
        score: 4
    },
    {
        imgSrc: "images/zeldaEchosOfWisdom.jpeg",
        imgAlt: "Legend of Zelda: Echos of Wisdom Game Header",
        title: "Legend of Zelda: Echos of Wisdom",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "",
        score: 4
    },
    {
        imgSrc: "images/fortnite.jpeg",
        imgAlt: "Fortnite Game Header",
        title: "Fortnite",
        platforms: ["Xbox", "PlayStation", "PC", "Mobile"],
        description: "",
        score: 4
    }
];

// Renders all the games dynamically
const gamesContainer = document.querySelector(".games-container");

function renderGames(gameArray) {
    const dialog = gamesContainer.querySelector("dialog");
    gamesContainer.innerHTML = "";
    if (dialog) {
        gamesContainer.appendChild(dialog);
    }

    gameArray.forEach((game) => {
        const gameContainer = document.createElement("section");
        gameContainer.className = "game-container";

        const gameImg = document.createElement("img");
        gameImg.className = "gameImage";
        gameImg.src = game.imgSrc;
        gameImg.alt = game.imgAlt;
        gameImg.title = game.imgAlt;
        gameContainer.appendChild(gameImg);

        const h2Title = document.createElement("h2");
        h2Title.textContent = game.title;
        gameContainer.appendChild(h2Title);

        const buttonDetails = document.createElement("button");
        buttonDetails.className = "btn-details";
        buttonDetails.textContent = "View Details";
        gameContainer.appendChild(buttonDetails);

        gamesContainer.appendChild(gameContainer);
    });
}

// This will run on the initial load of the page.
renderGames(games);

// Renders the modal of the games
const modalImg = document.querySelector("dialog img");
const modal = document.querySelector("dialog");
const closeButton = document.querySelector(".close-viewer");

gamesContainer.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("btn-details")) {
        const img = document.querySelector("dialog img");
        modalImg.src = img.getAttribute("src");
        modalImg.alt = img.getAttribute("alt");

        const gameCard = e.target.closest("div") || e.target.parentElement;
        const cardImg = gameCard.querySelector("img");

        if (cardImg) {
            modalImg.src = cardImg.src;
            modalImg.alt = cardImg.alt;
        }

        const pContent = document.querySelector(".gamePlatforms");

        for (const game of games) {
            if (cardImg.getAttribute("src") === game.imgSrc) {
                document.querySelector(".gameTitle").textContent = game.title;
                pContent.textContent = "";

                game.platforms.forEach((platform, index) => {
                    const spanPlatform = document.createElement("span");

                    if (index === game.platforms.length - 1) {
                        spanPlatform.textContent = platform;
                    } else {
                        spanPlatform.textContent = platform + ", ";
                    }
                    pContent.appendChild(spanPlatform);
                });

                document.querySelector(".gameDesc").textContent = game.description;
                document.querySelector(".gameScore").textContent = "Score: " + game.score;
            }
        }

        modal.showModal();
    }
});

closeButton.addEventListener('click', () => {
    modal.close();
});

// This gets the input element of the search bar.
const searchInput = document.querySelector(".search-input");
// This is the button element of the search icon.
const searchSubmit = document.querySelector(".search-form");

// This is a click event listener function when the submit button is clicked.
searchSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    // This takes the input element and gets the input value with 'element.value'.
    // This then turns the word to lowercase and trims it of whitespace at the beginning and end of the string.
    const query = searchInput.value.toLowerCase().trim();

    const filterGames = games.filter(function (game) {
        const titleMatch = game.title.toLowerCase().includes(query);
        const descMatch = game.description && game.description.toLowerCase().includes(query);
        const platformMatch = game.platforms.some(platform => platform.toLowerCase().includes(query));

        return titleMatch || descMatch || platformMatch;
    });

    filterGames.sort((a, b) => b.score - a.score);

    renderGames(filterGames);
});

searchInput.addEventListener("input", function () {
    searchSubmit.click();
});

const randomGamePicker = document.querySelector(".random-picker");
randomGamePicker.addEventListener("click", (e) => {
    e.preventDefault();
    const ranIndex = Math.floor(Math.random() * games.length);
    const ranGame = games[ranIndex];

    renderGames([ranGame]);
});