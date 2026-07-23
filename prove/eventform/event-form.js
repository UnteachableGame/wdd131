const formContainer = document.querySelector(".form-container");

const firstNameInput = document.querySelector(".fname-input");
const lastNameInput = document.querySelector(".lname-input");
const typeInput = document.querySelector(".type-input");
const dateInput = document.querySelector(".date-input");
const idInput = document.querySelector(".id-input");

const submitContainer = document.querySelector(".submit");

const idContainer = document.querySelector("#idId");
const accessCodeContainer = document.querySelector("#accessCode");

const errorCodeContainer = document.querySelector(".error-code");
const submissionResultsContainer = document.querySelector(".submission-results");

const nameOutput = document.querySelector(".name-output");
const typeOutput = document.querySelector(".type-output");
const dateOutput = document.querySelector(".date-output");

typeInput.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "student":
            idContainer.classList.remove("hidden");
            if (!accessCodeContainer.classList.contains("hidden")) {
                accessCodeContainer.classList.add("hidden");
            }
            if (!errorCodeContainer.classList.contains("hidden")) {
                errorCodeContainer.classList.add("hidden");
            }
            submitContainer.style.gridRow = "5/6";
            break;
        case "guest":
            accessCodeContainer.classList.remove("hidden");
            if (!idContainer.classList.contains("hidden")) {
                idContainer.classList.add("hidden");
            }
            if (!errorCodeContainer.classList.contains("hidden")) {
                errorCodeContainer.classList.add("hidden");
            }
            submitContainer.style.gridRow = "5/6";
            break;
        case "chooseOne":
            if (!idContainer.classList.contains("hidden")) {
                idContainer.classList.add("hidden");
            }
            if (!accessCodeContainer.classList.contains("hidden")) {
                accessCodeContainer.classList.add("hidden");
            }
            submitContainer.style.gridRow = "4/5";
            break;
    }
});

formContainer.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formContainer);
    const firstName = formData.get("fname");
    const lastName = formData.get("lname");

    if (!idInput.checkValidity() || typeInput.value === "student") {
        errorCodeContainer.classList.remove("hidden");
        errorCodeContainer.textContent = "Student I# must be 9 digits";
    } else if (idInput.value === "" || typeInput.value === "student") {
        errorCodeContainer.classList.remove("hidden");
        errorCodeContainer.textContent = "Please enter a 9 digit student I#";
    } else {
        errorCodeContainer.classList.add("hidden");
        errorCodeContainer.textContent = "";

        if (firstNameInput.checkValidity() && lastNameInput.checkValidity() && dateInput.checkValidity()) {
            submissionResultsContainer.classList.remove("hidden");
            nameOutput.textContent = firstName + " " + lastName;
            typeOutput.textContent = typeInput.value;
            dateOutput.textContent = dateInput.value;
        } else {
            errorCodeContainer.classList.remove("hidden");

            if (firstNameInput.value === "" || !firstNameInput.checkValidity()) {
                errorCodeContainer.textContent = "Please enter your first name!";
            } else if (lastNameInput.value === "" || !lastNameInput.checkValidity()) {
                errorCodeContainer.textContent = "Please enter you last name!";
            } else if (dateInput.value === "" || !dateInput.checkValidity()) {
                errorCodeContainer.textContent = "Please enter a date!";
            }
        }
    }
});