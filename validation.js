document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM załadowany!');
    const emailForm = document.getElementById("form");
    const errorMessage = document.getElementById("email-error");
    const email = document.getElementById("email");
    const signupMainSection = document.getElementById("signup-main");
    const successSection = document.getElementById("success-message");
    const dismissBtn = document.getElementById("dismiss-btn");


    const showError = () => {
        errorMessage.classList.add("error-message__active");
        email.classList.add("signup-form-email__error");

    }

    const hideError = () => {
        errorMessage.classList.remove("error-message__active");
        email.classList.remove("signup-form-email__error");
    }

    const showSuccess = () => {
        signupMainSection.style.display = "none";
        successSection.style.display = "flex";

        const inputMail = email.value.trim();
        const successMessage = document.getElementById("success-message-content");

        successMessage.innerHTML = `A confirmation email has been sent to <strong>${inputMail}</strong>. Please open it and click the button inside to confirm your subscription.`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.validity.valueMissing || email.validity.patternMismatch) {
            showError();
        } else {
            hideError();
            showSuccess();
        }
    }

    const handleExit = () => {
        location.reload();
    }


    // email.addEventListener("input", errorValidation);
    emailForm.addEventListener("submit", handleSubmit);
    dismissBtn.addEventListener("click", handleExit)
});