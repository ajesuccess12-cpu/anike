// Show or hide the navigation links on small screens
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");

    const menuIsOpen = navLinks.classList.contains("show-menu");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.setAttribute("aria-label", menuIsOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the mobile menu after choosing a page section
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("show-menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

// Find the form fields and the places where messages will appear
const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function showError(field, errorId, text) {
    document.getElementById(errorId).textContent = text;
    field.setAttribute("aria-invalid", "true");
}

function clearError(field, errorId) {
    document.getElementById(errorId).textContent = "";
    field.setAttribute("aria-invalid", "false");
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;
    formResult.textContent = "";
    formResult.className = "form-result";

    clearError(fullName, "name-error");
    clearError(email, "email-error");
    clearError(subject, "subject-error");
    clearError(message, "message-error");

    if (fullName.value.trim() === "") {
        showError(fullName, "name-error", "Please enter your full name.");
        formIsValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "email-error", "Please enter your email address.");
        formIsValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "email-error", "Please enter a valid email address.");
        formIsValid = false;
    }

    if (subject.value.trim() === "") {
        showError(subject, "subject-error", "Please enter a subject.");
        formIsValid = false;
    }

    if (message.value.trim() === "") {
        showError(message, "message-error", "Please write a message.");
        formIsValid = false;
    }

    if (formIsValid) {
        formResult.textContent = "Thank you! Your form is complete. This demo does not send email.";
        formResult.classList.add("success");
        contactForm.reset();
    } else {
        formResult.textContent = "Please correct the fields marked above.";
        formResult.classList.add("error");
    }
});

// Update the copyright year automatically
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;