document.addEventListener("DOMContentLoaded", function() {
    // Populando os dias
    let daySelect = document.getElementById('day-select');
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.add(option);
    }

    // Populando os meses
    let monthSelect = document.getElementById('month-select');
    let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    months.forEach(function(month) {
        let option = document.createElement("option");
        option.value = month;
        option.text = month;
        monthSelect.add(option);
    });

    // Populando os anos
    let yearSelect = document.getElementById('year-select');
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.add(option);
    }

    // Exibir formulário ao clicar no botão "Criar nova conta"
    document.getElementById('create-account-btn').addEventListener('click', function() {
        document.getElementById('signup-form-container').classList.remove('hidden');
    });

    // Esconder formulário ao clicar no botão de fechar
    document.getElementById('signup-form-close').addEventListener('click', function() {
        document.getElementById('signup-form-container').classList.add('hidden');
    });

    // Validar formulário
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validar nome
        let firstName = document.getElementById('first-name');
        let firstNameError = document.getElementById('first-name-error');
        if (!firstName.value.trim()) {
            firstNameError.textContent = 'Nome é obrigatório.';
            firstNameError.style.display = 'block';
            isValid = false;
        } else {
            firstNameError.style.display = 'none';
        }

        // Validar sobrenome
        let lastName = document.getElementById('last-name');
        let lastNameError = document.getElementById('last-name-error');
        if (!lastName.value.trim()) {
            lastNameError.textContent = 'Sobrenome é obrigatório.';
            lastNameError.style.display = 'block';
            isValid = false;
        } else {
            lastNameError.style.display = 'none';
        }

        // Validar celular ou email
        let contact = document.getElementById('contact');
        let contactError = document.getElementById('contact-error');
        if (!contact.value.trim()) {
            contactError.textContent = 'Celular ou email é obrigatório.';
            contactError.style.display = 'block';
            isValid = false;
        } else if (!validateEmail(contact.value) && !validatePhone(contact.value)) {
            contactError.textContent = 'Celular ou email inválido.';
            contactError.style.display = 'block';
            isValid = false;
        } else {
            contactError.style.display = 'none';
        }

        // Validar senha
        let password = document.getElementById('password');
        let passwordError = document.getElementById('password-error');
        if (!password.value.trim()) {
            passwordError.textContent = 'Senha é obrigatória.';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // Validar data de nascimento
        let day = document.getElementById('day-select').value;
        let month = document.getElementById('month-select').value;
        let year = document.getElementById('year-select').value;
        let birthdateError = document.getElementById('birthdate-error');
        if (!day || !month || !year) {
            birthdateError.textContent = 'Data de nascimento é obrigatória.';
            birthdateError.style.display = 'block';
            isValid = false;
        } else {
            birthdateError.style.display = 'none';
        }

        // Validar gênero
        let gender = document.querySelector('input[name="gender"]:checked');
        let genderError = document.getElementById('gender-error');
        if (!gender) {
            genderError.textContent = 'Gênero é obrigatório.';
            genderError.style.display = 'block';
            isValid = false;
        } else {
            genderError.style.display = 'none';
        }

        if (isValid) {
            // Redirecionar para a página de perfil
            window.location.href = "paginainicial/home.html";
        }
    });

// Função para validar o formulário de login e redirecionar
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Contato (Celular ou email)
    const loginContact = document.getElementById('login-contact');
    const contactValue = loginContact.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,11}$/;

    if (contactValue === '') {
        document.getElementById('login-contact-error').innerText = 'Celular ou email é obrigatório';
        loginContact.classList.add('error');
        valid = false;
    } else if (!emailPattern.test(contactValue) && !phonePattern.test(contactValue)) {
        document.getElementById('login-contact-error').innerText = 'Informe um celular ou email válido';
        loginContact.classList.add('error');
        valid = false;
    } else {
        document.getElementById('login-contact-error').innerText = '';
        loginContact.classList.remove('error');
    }

    // Senha
    const loginPassword = document.getElementById('login-password');
    if (loginPassword.value.trim() === '') {
        document.getElementById('login-password-error').innerText = 'Senha é obrigatória';
        loginPassword.classList.add('error');
        valid = false;
    } else {
        document.getElementById('login-password-error').innerText = '';
        loginPassword.classList.remove('error');
    }

    if (valid) {
        window.location.href = "paginainicial/home.html";
    }
});
});
