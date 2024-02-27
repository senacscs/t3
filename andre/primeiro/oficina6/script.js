document.querySelector("form") /*Seleciona o primeiro elemento <form> do documento.*/
.addEventListener("submit", function(event) { /*Adiciona um ouvinte de evento para o evento de envio do formulário.*/
  event.preventDefault(); /*Evita o comportamento padrão do envio do formulário, que é a atualização da página.*/

  var password = document.getElementById("password").value; /*Obtém o valor do campo de senha com o ID "password".*/
  var confirmPassword = document.getElementById("confirm-password").value; /*Obtém o valor do campo de confirmação de senha com o ID "confirm-password".*/

  if (password === confirmPassword) { /*Verifica se as senhas são iguais. Se forem iguais, executa o código dentro do bloco if. Caso contrário, executa o código dentro do bloco else.*/
    alert("Formulário enviado com sucesso!"); /*Exibe um alerta informando que o formulário foi enviado com sucesso.*/
    this.submit(); /*Envia o formulário atual.*/

    var mensagem = document.createElement("p"); /*Cria um novo elemento <p> para exibir uma mensagem.*/
    mensagem.textContent = "O formulário foi enviado."; /*Define o texto da mensagem como "O formulário foi enviado.*/
    mensagem.classList.add("success"); /*Adiciona a classe CSS "success" à mensagem.*/
    document.body.appendChild(mensagem); /*Adiciona a mensagem como um filho do elemento <body> do documento.*/

    setTimeout(function() {
      mensagem.remove();
    }, 2000); /*Aguarda 2 segundos e remove a mensagem do documento.*/

  } else {
    
    alert("As senhas estão incorretas. Por favor, tente novamente.");
  }
}); /*O bloco else é executado quando as senhas não são iguais*/