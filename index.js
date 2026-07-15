ponders = [
    [
        {
            link: "ponder/dom/dom.html",
            title: "Meta Tags pt.1"
        }
    ], [
        {
            link: "ponder/dom/dom.html",
            title: "DOM pt.2"
        },
        {
            link: "ponder/theme/dom-theme.html",
            title: "DOM Themes"
        }
    ], [
        {
            link: "ponder/responsive/responsive.html",
            title: "Responsive pt.1"
        }
    ], [
        {
            link: "ponder/responsive/responsive.html",
            title: "Responsive Menu pt.2"
        },
        {
            link: "ponder/modals/modals.html",
            title: "Modals"
        }
    ], [
        {
            link: "ponder/movies/movies.html",
            title: "Movies pt.1"
        }
    ], [
        {
            link: "ponder/arrays/arrays.html",
            title: "Array Methods"
        },
        {
            link: "ponder/movies/movies.html",
            title: "Movies pt.2"
        }
    ], [

    ]
]

const mainSectionContainer = document.querySelector(".main-container");
let weekIndex = 1;

ponders.forEach((ponderWeek) => {
    let weekContainer = document.createElement("section");

    weekContainer.className = "week-containers ponder-container";
    let title = document.createElement("h3");
    title.textContent = `Week ${weekIndex} Ponder`;
    weekContainer.appendChild(title);

    ponderWeek.forEach((ponder) => {
        let ponderContainer = document.createElement("div");
        ponderContainer.className = "main-elements-container"

        let linkElement = document.createElement("a");
        linkElement.href = ponder.link;
        linkElement.textContent = ponder.title;

        ponderContainer.appendChild(linkElement);
        weekContainer.appendChild(ponderContainer);
    });
    let hr = document.createElement("hr");
    weekContainer.appendChild(hr);

    mainSectionContainer.appendChild(weekContainer);
    weekIndex++;
});