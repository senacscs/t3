document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const addProductForm = document.getElementById('add-product-form');
  
    // Função para renderizar a lista de produtos
    function renderProducts(products) {
      productList.innerHTML = '';
      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        productList.appendChild(li);
      });
    }
  
    // Função para adicionar um produto
    function addProduct(event) {
      event.preventDefault();
      const productNameInput = document.getElementById('product-name');
      const productName = productNameInput.value.trim();
      if (productName !== '') {
        // Aqui você pode enviar os dados para o servidor ou simplesmente adicionar à lista
        const li = document.createElement('li');
        li.textContent = productName;
        productList.appendChild(li);
        productNameInput.value = '';
      } else {
        alert('Por favor, insira um nome de produto válido.');
      }
    }
  
    // Event listener para o formulário de adicionar produto
    addProductForm.addEventListener('submit', addProduct);
  
    // Exemplo de produtos iniciais
    const initialProducts = [
      { name: 'Produto 1' },
      { name: 'Produto 2' },
      { name: 'Produto 3' }
    ];
  
    // Renderizar os produtos iniciais
    renderProducts(initialProducts);
  });
  