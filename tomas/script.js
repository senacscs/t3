var button1 = document.getElementById('read_button');
button1.addEventListener('click', function() {
    var card = document.querySelector('.card');
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        return button1.textContent = 'Ocultar trabalhos';
    }
    button1.textContent = 'Ver trabalhos';
});

var button2 = document.getElementById('read_button_second');
button2.addEventListener('click', function() {
    var card = document.querySelector('.cardr');
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        return button2.textContent = 'Ocultar trabalhos';
    }
    button2.textContent = 'Ver trabalhos';
});  

var button3 = document.getElementById('read_button_third');
button3.addEventListener('click', function() {
    var card = document.querySelector('.cardt');
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        return button3.textContent = 'Ocultar trabalhos';
    }
    button3.textContent = 'Ver trabalhos';
});