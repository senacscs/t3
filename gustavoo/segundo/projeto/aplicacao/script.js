document.addEventListener('DOMContentLoaded', function () {

    function showSection(sectionId) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active-section');
        });
        document.getElementById(sectionId).classList.remove('hidden');
        document.getElementById(sectionId).classList.add('active-section');
    }

    function loadProducts() {
        const productListContent = document.getElementById('productListContent');
        const products = JSON.parse(localStorage.getItem('products')) || [];
        productListContent.innerHTML = '';

        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - Vence em ${product.expiryDate}
                            <button onclick="editProduct(${index})">Editar</button>
                            <button onclick="deleteProduct(${index})">Deletar</button>`;
            productListContent.appendChild(li);
        });
    }

    function checkExpiringProducts() {
        const nearExpiryList = document.getElementById('nearExpiryList');
        const expiredListContent = document.getElementById('expiredListContent');
        const products = JSON.parse(localStorage.getItem('products')) || [];
        nearExpiryList.innerHTML = '';
        expiredListContent.innerHTML = '';
    
        const today = new Date();
    
        products.forEach((product) => {
            const expiryDate = new Date(product.expiryDate);
            const diffTime = expiryDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
            if (diffDays <= 0) {  // Produto vencido
                const li = document.createElement('li');
                li.textContent = `${product.name} - Venceu em ${expiryDate.toLocaleDateString()}`;
                li.classList.add('expired');  // Adiciona a classe 'expired' para produtos vencidos
                expiredListContent.appendChild(li);
            } else if (diffDays <= 10) {  // Produto perto do vencimento (até 10 dias)
                const li = document.createElement('li');
                li.textContent = `${product.name} - Vence em ${diffDays} dia${diffDays > 1 ? 's' : ''}`;
    
                if (diffDays === 10) {
                    li.classList.add('ten-days');  // Adiciona a classe 'ten-days' para produtos a 10 dias do vencimento
                } else {
                    li.classList.add('near-expiry');  // Adiciona a classe 'near-expiry' para produtos perto do vencimento
                }
                nearExpiryList.appendChild(li);
                
                // Também adiciona à lista de produtos vencidos
                const expiredLi = document.createElement('li');
                expiredLi.textContent = `${product.name} - Vencerá em ${diffDays} dia${diffDays > 1 ? 's' : ''}`;
                expiredLi.classList.add('near-expiry');
                expiredListContent.appendChild(expiredLi);
            }
        });
    }
    
                

    document.getElementById('productForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productExpiryDate = document.getElementById('productExpiryDate').value;

        if (!productName || !productExpiryDate) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ name: productName, expiryDate: productExpiryDate });
        localStorage.setItem('products', JSON.stringify(products));

        document.getElementById('productForm').reset();
        alert('Produto cadastrado com sucesso!');

        loadProducts();
        showSection('productList');
    });

    window.editProduct = function(index) {
        const products = JSON.parse(localStorage.getItem('products'));
        const product = products[index];

        document.getElementById('productName').value = product.name;
        document.getElementById('productExpiryDate').value = product.expiryDate;

        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));

        showSection('addProduct');
    };

    window.deleteProduct = function(index) {
        const products = JSON.parse(localStorage.getItem('products'));
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    };

    document.getElementById('homeButton').addEventListener('click', function () {
        showSection('home');
    });

    document.getElementById('productListButton').addEventListener('click', function () {
        showSection('productList');
        loadProducts();
    });

    document.getElementById('addProductButton').addEventListener('click', function () {
        showSection('addProduct');
    });

    document.getElementById('expiredListButton').addEventListener('click', function () {
        showSection('expiredList');
        checkExpiringProducts();
    });

    showSection('home');
});




