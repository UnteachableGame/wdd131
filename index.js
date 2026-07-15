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
        {
            link: "ponder/form/form.html",
            title: "Form"
        }
    ], [
        {
            link: "ponder/courses/courses.html",
            title: "Courses"
        }
    ], [
        {
            link: "https://flexboxfroggy.com/",
            title: "Flexbox Froggy"
        },
        {
            link: "ponder/flexbox/flexbox.html",
            title: "Flexbox Exercise"
        }
    ], [
        {
            link: "ponder/hikes/hikes.html",
            title: "Sorting Activities"
        }
    ]
]

const mainSectionContainer = document.querySelector(".main-container");
let weekIndex = 1;

// This creates the "div" elements
ponders.forEach((ponderWeek, index, arr) => {
    let weekContainer = document.createElement("section");

    weekContainer.className = "week-containers ponder-container";
    let title = document.createElement("h3");
    title.textContent = `Week ${weekIndex} Ponder`;
    weekContainer.appendChild(title);

    let ponderContainer = document.createElement("div");
    ponderContainer.className = "main-elements-container ponder-element-container"

    // This creates the "a" elements
    ponderWeek.forEach((ponder) => {
        let linkElement = document.createElement("a");
        linkElement.href = ponder.link;
        linkElement.textContent = ponder.title;

        ponderContainer.appendChild(linkElement);
        ponderContainer.appendChild(document.createElement("br"));
    });
    weekContainer.appendChild(ponderContainer);

    if (index !== arr.length - 1) {
        weekContainer.appendChild(document.createElement("hr"));
    }

    mainSectionContainer.appendChild(weekContainer);
    weekIndex++;
});