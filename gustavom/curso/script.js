function validarFormulario() {
    var name = document.getElementById('name').value;
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
    var question3 = document.getElementById('question3').value;
    var question4 = document.getElementById('question4').value;
    var question5 = document.getElementById('question5').value;

    var nomesValidos = ['Ariane', 'Bernardo', 'Brayan', 'Caio', 'Caroline dos Santos', 'Caroline Nepomoceno', 'Chaiane', 'Douglas', 'Eloisa', 'Glória', 'Joana Kersting', 'Joana Lauschner', 'João', 'Laura', 'Leonardo', 'Luiza', 'Manuella', 'Mariana', 'Mirella', 'Raíssa', 'Roberto', 'Tamires', 'Théo', 'Thiago Araujo', 'Thiago Costa', 'Victhor', 'Vitória', 'Yasmim'];

    if(nomesValidos.includes(name)) {
    }
    else {
        alert('O nome deve ser válido!');
    }

    if(question1.length < 20 || question2.length < 20 || question3.length < 20 || question4.length < 20 || question5.length < 20) {
        alert('As respostas devem ter pelo menos 20 caracteres.');
        return false;
    }
    else{
        alert('E-mail com respostas enviado!');
    }

    return true;
}