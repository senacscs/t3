// Adiciona um ouvinte de evento para o evento 'DOMContentLoaded', que é acionado quando o HTML foi completamente carregado e analisado.
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento do formulário com o ID 'productForm' e o armazena na variável 'productForm'.
    const productForm = document.getElementById('productForm');
    // Obtém a lista onde os produtos serão exibidos com o ID 'productList' e a armazena na variável 'productList'.
    const productList = document.getElementById('productList');
  
    // Adiciona um ouvinte de evento para o evento 'submit' no formulário.
    productForm.addEventListener('submit', function(event) {
      // Impede o comportamento padrão do formulário (recarregar a página).
      event.preventDefault();
      // Obtém o valor do campo de entrada do nome do produto e armazena-o na variável 'productName'.
      const productName = document.getElementById('productName').value;
      // Obtém o valor do campo de entrada da data de expiração e armazena-o na variável 'expirationDate'.
      const expirationDate = document.getElementById('expirationDate').value;
  
      // Chama a função 'addProduct' passando o nome do produto e a data de expiração como argumentos.
      addProduct(productName, expirationDate);
      // Limpa o formulário após o envio.
      productForm.reset();
    });
  
    // Define a função 'addProduct', que adiciona um produto à lista de produtos.
    function addProduct(name, expirationDate) {
      // Cria um novo elemento <div> para representar o item do produto.
      const productItem = document.createElement('div');
      // Adiciona a classe 'product-item' ao elemento recém-criado.
      productItem.classList.add('product-item');
      // Obtém a data atual.
      const currentDate = new Date();
      // Converte a data de expiração fornecida em um objeto Date.
      const expDate = new Date(expirationDate);
      // Calcula os dias até a expiração.
      const daysUntilExpiration = Math.ceil((expDate - currentDate) / (1000 * 60 * 60 * 24));
      // Define o texto do elemento do produto com o nome do produto e os dias até a expiração.
      productItem.textContent = `${name} - vence em ${daysUntilExpiration} dia`;
  
      // Adiciona a classe 'expiring' ao elemento do produto se estiver a menos de 7 dias da expiração.
      if (daysUntilExpiration < 7) {
        productItem.classList.add('expiring');
      }
  
      // Adiciona o elemento do produto à lista de produtos.
      productList.appendChild(productItem);
    }
  });
  
    