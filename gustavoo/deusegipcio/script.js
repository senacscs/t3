
        document.getElementById('verificar').addEventListener('click', function() {
            var pontuacao = 0;

            var respostaPergunta1 = document.querySelector('input[name="pergunta1"]:checked');
            if (respostaPergunta1 && respostaPergunta1.value === 'c') {
                pontuacao++;
            }

            var respostaPergunta2 = document.querySelector('input[name="pergunta2"]:checked');
            if (respostaPergunta2 && respostaPergunta2.value === 'c') {
                pontuacao++;
            }

            var respostaPergunta3 = document.querySelector('input[name="pergunta3"]:checked');
            if (respostaPergunta3 && respostaPergunta3.value === 'c') {
                pontuacao++;
            }

            var respostaPergunta4 = document.querySelector('input[name="pergunta4"]:checked');
            if (respostaPergunta4 && respostaPergunta4.value === 'b,e,j' ) {
                pontuacao++;
            }

            var resultadoDiv = document.getElementById('resultado');
            var pontuacaoElement = document.getElementById('pontuacao');
            pontuacaoElement.textContent = 'Você acertou ' + pontuacao + ' perguntas.';
            resultadoDiv.style.display = 'block';
        });
