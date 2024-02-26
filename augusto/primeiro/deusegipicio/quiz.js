document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var resposta1 = document.querySelector('input[name="pergunta1"]:checked');
    var resposta2 = document.querySelector('input[name="pergunta2"]:checked');
    var resposta3 = document.querySelector('input[name="pergunta3"]:checked');
    
    var pontuacao = 0;
    if (resposta1 && resposta1.value === "certo") {
        pontuacao++;
    }
    if (resposta2 && resposta2.value === "certo") {
        pontuacao++;
    }
    if (resposta3 && resposta3.value === "certo") {
        pontuacao++;
    }
    
    document.getElementById("resultado").innerHTML = "Você acertou " + pontuacao + " de 3 questões.";
});