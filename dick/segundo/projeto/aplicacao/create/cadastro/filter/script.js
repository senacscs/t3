document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    var valido = verificar();
    if (!valido) {alert('Marque no minímo uma opção');
        return
    }
    else
    window.location.href = '../../../home/index.html'
})

var inputs = document.querySelectorAll('input');

function verificar() {
    return [].filter.call(inputs, function (input) {
        return input.checked;
    }).length;
}
document.querySelector('button').addEventListener('click', function () {
});