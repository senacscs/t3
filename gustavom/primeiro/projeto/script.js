var dialog1 = document.getElementById('meuDialogo');
var abrirMet = document.getElementById('abrirMet');
var fechar1 = document.getElementById('fechar1');

// Adiciona um ouvinte de evento para abrir o diálogo
abrirMet.addEventListener('click', function() {
    dialog1.showModal();
});

// Adiciona um ouvinte de evento para fechar o diálogo
fechar1.addEventListener('click', function() {
    dialog1.close();
});

// Obtém o diálogo e os botões
var dialog2 = document.getElementById('meuDialogo2');
var abrirRef = document.getElementById('abrirRef');
var fechar2 = document.getElementById('fechar2');

// Adiciona um ouvinte de evento para abrir o diálogo
abrirRef.addEventListener('click', function() {
    dialog2.showModal();
});

// Adiciona um ouvinte de evento para fechar o diálogo
fechar2.addEventListener('click', function() {
    dialog2.close();
});