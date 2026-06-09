const aCourse = { // This is considered an object that stores variables and functions.
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [ // The [] tell me that this is an array.
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }

};

function sectionTemplate(section) {
    return `
        <tr>
           <td>${section.sectionNum}</td>
           <td>${section.roomNum}</td>
           <td>${section.enrolled}</td>
           <td>${section.days}</td>
           <td>${section.instructor}</td>
        </tr>
    `
}

// console.log(aCourse.code); // This is a property defined in the previous array.
// aCourse.code = "WDD131"; // You can define variables this like.
//
// document.querySelector("#courseName").textContent = aCourse.name;
// document.querySelector("#courseCode").textContent = aCourse.code;
//
// console.log(aCourse.sections[1].instructor);
//
// aCourse.enrollStudent();

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

// document.querySelector("#enrollStudent").addEventListener("click", function () {
//     const sectionNum = document.querySelector("#sectionNumber").value;
//     aCourse.enrollStudent(sectionNum);
// });

document.querySelector("#enrollForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});