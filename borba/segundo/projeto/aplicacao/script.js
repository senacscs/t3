// Modal Elements
const modal = document.getElementById("signup-modal");
const createAccountButton = document.getElementById("create-account-button");
const closeBtn = document.querySelector(".close");

// Show Modal on "Create New Account" button click
createAccountButton.onclick = function () {
    modal.classList.add("show");
    modal.style.display = "block";
};

// Hide Modal on close button click
closeBtn.onclick = function () {
    modal.classList.remove("show");
    modal.style.display = "none";
};

// Hide Modal when clicking outside of modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
    }
};

// Show eye icons on page load
window.onload = function () {
    document.getElementById("toggle-password-signup").setAttribute("src", "assets/eye.svg");
    document.getElementById("toggle-confirm-password").setAttribute("src", "assets/eye.svg");
    document.getElementById("toggle-password-login").setAttribute("src", "assets/eye.svg");
};

// Form Validation and Sign Up Handling
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const emailOrPhone = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;

    let isValid = true;

    clearErrors();

    if (!validateName(firstName) || !validateName(lastName)) {
        isValid = false;
        showError("name-error", "Nome e sobrenome são obrigatórios e não podem conter caracteres especiais.");
        document.getElementById("first-name").classList.add("invalid");
        document.getElementById("last-name").classList.add("invalid");
    }

    if (!validateEmailOrPhone(emailOrPhone)) {
        isValid = false;
        showError("email-error", "Email ou telefone inválido.");
        document.getElementById("email").classList.add("invalid");
    }

    if (!validatePassword(password)) {
        isValid = false;
        showError("password-error", "A senha deve ter no mínimo 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
        document.getElementById("password").classList.add("invalid");
    }

    if (password !== confirmPassword) {
        isValid = false;
        showError("confirm-password-error", "As senhas não coincidem.");
        document.getElementById("confirm-password").classList.add("invalid");
    }

    if (!validateBirthdate(birthdate)) {
        isValid = false;
        showError("birthdate-error", "Data de nascimento inválida.");
        document.getElementById("birthdate").classList.add("invalid");
    }

    if (!gender) {
        isValid = false;
        alert("Por favor, selecione um gênero.");
    }

    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "paginainicial/index.html"; // Redireciona para a página inicial
    }
});

// Toggle password visibility in Sign Up Form
document.getElementById("toggle-password-signup").addEventListener("click", function () {
    togglePasswordVisibility("password", this);
});

document.getElementById("toggle-confirm-password").addEventListener("click", function () {
    togglePasswordVisibility("confirm-password", this);
});

// Toggle password visibility in Login Form
document.getElementById("toggle-password-login").addEventListener("click", function () {
    togglePasswordVisibility("login-password", this);
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

// General function to toggle password visibility
function togglePasswordVisibility(fieldId, toggleElement) {
    const passwordField = document.getElementById(fieldId);
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    const imgSrc = type === "password" ? "assets/eye.svg" : "assets/eye-slash.svg";
    toggleElement.setAttribute("src", imgSrc);
}

// Function to handle login
function login() {
    const emailOrPhone = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const emailError = document.getElementById("login-email-error");
    const passwordError = document.getElementById("login-password-error");

    emailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    if (!validateEmailOrPhone(emailOrPhone)) {
        emailError.innerText = "Email ou telefone inválido.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.innerText = "Senha deve ter no mínimo 6 caracteres.";
        isValid = false;
    }

    if (isValid) {
        alert("Login realizado com sucesso!");
        window.location.href = "paginainicial/index.html"; // Redireciona para a página inicial
    }
}

// Utility functions for validation and error handling
function validateName(name) {
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
}

function validateEmailOrPhone(value) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
}

function validateBirthdate(birthdate) {
    const birthdateDate = new Date(birthdate);
    const age = new Date().getFullYear() - birthdateDate.getFullYear();
    return age >= 18;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(error => error.innerText = "");

    const invalidFields = document.querySelectorAll(".invalid");
    invalidFields.forEach(field => field.classList.remove("invalid"));
}
