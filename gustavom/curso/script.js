function validarFormulario() {
    var name = document.getElementById('name').value;
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
    var question3 = document.getElementById('question3').value;
    var question4 = document.getElementById('question4').value;
    var question5 = document.getElementById('question5').value;

    if(name.length < 1) {
        alert('O nome deve ter pelo menos 1 carácter.');
        return false;
    }

    if(question1.length < 20 || question2.length < 20 || question3.length < 20 || question4.length < 20 || question5.length < 20) {
        alert('As respostas devem ter pelo menos 20 caracteres.');
        return false;
    }
    else{
        alert('E-mail com respotas enviado!')
    }

    return true;
}
