// Exemplo de dados de produtos com imagens
const produtos = [
    { nome: "Tomate Orgânico", preco: "R$5,00", descricao: "Tomate fresco e orgânico.", imagem: "../assets/tomate.png" },
    { nome: "Alface Hidropônica", preco: "R$3,00", descricao: "Alface cultivada sem solo.", imagem: "../assets/alface.png" },
    { nome: "Queijo Artesanal", preco: "R$20,00", descricao: "Queijo produzido localmente.", imagem: "../assets/queijo.png" },
    { nome: "Milho Verde", preco: "R$4,00", descricao: "Milho fresco, direto da roça.", imagem: "../assets/milho.png" },
    { nome: "Beterraba Orgânica", preco: "R$6,00", descricao: "Beterraba cultivada sem agrotóxicos.", imagem: "../assets/beterraba.png" }
];


// Função para carregar os produtos
function carregarProdutos() {
    const productGrid = document.querySelector('.product-grid');
    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>${produto.preco}</strong></p>
            <button class="button">Comprar</button>
        `;
        productGrid.appendChild(produtoElement);
    });

    // Aqui, agora que os produtos foram carregados, adicionamos o evento de clique
    document.querySelectorAll('.produto button').forEach(button => {
        button.addEventListener('click', abrirModal);
    });
}

// Função para abrir o modal de compra
function abrirModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'flex';
}

// Função para fechar o modal de compra
function fecharModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
}

// Adiciona evento de clique ao botão de fechar (x)
document.querySelector('.modal .close').addEventListener('click', fecharModal);

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('purchaseModal');
    if (event.target === modal) {
        fecharModal();
    }
});

// Submete o formulário de compra
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Compra realizada com sucesso!');
    fecharModal();
});

// Chama a função para carregar os produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarProdutos);

// Variável global para armazenar o produto selecionado
let produtoAtual = {};

// Função para carregar os produtos
function carregarProdutos() {
    const productGrid = document.querySelector('.product-grid');
    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>${produto.preco}</strong></p>
            <button class="button">Comprar</button>
        `;
        productGrid.appendChild(produtoElement);

        // Adiciona evento de clique para abrir o modal e configurar o produto atual
        produtoElement.querySelector('.button').addEventListener('click', function () {
            produtoAtual = produto;  // Armazena o produto selecionado
            abrirModal();
        });
    });
}

// Função para abrir o modal de compra e configurar as informações do produto
function abrirModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'flex';

    // Atualiza a revisão do pedido
    document.getElementById('produtoSelecionado').innerText = `Produto: ${produtoAtual.nome}`;
    atualizarRevisaoPedido();
}

// Função para fechar o modal de compra
function fecharModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
}

// Função para atualizar a revisão do pedido
function atualizarRevisaoPedido() {
    const quantidade = document.getElementById('quantidade').value;
    const precoUnitario = parseFloat(produtoAtual.preco.replace('R$', '').replace(',', '.')); // Remove "R$"
    const total = (precoUnitario * quantidade).toFixed(2).replace('.', ',');

    document.getElementById('quantidadeSelecionada').innerText = `Quantidade: ${quantidade}`;
    document.getElementById('totalPreco').innerText = `Total: R$${total}`;
}

// Atualiza a revisão do pedido quando a quantidade muda
document.getElementById('quantidade').addEventListener('input', atualizarRevisaoPedido);

// Lógica para mostrar ou esconder o campo de data com base no método de entrega
document.getElementById('metodoEntrega').addEventListener('change', function() {
    const metodoSelecionado = this.value;
    const dataContainer = document.getElementById('dataEntregaContainer');
    
    if (metodoSelecionado === 'entregaAgendada') {
        dataContainer.style.display = 'block'; // Mostra o campo de data
    } else {
        dataContainer.style.display = 'none'; // Esconde o campo de data
    }
});

// Adiciona evento de clique ao botão de fechar (x)
document.querySelector('.modal .close').addEventListener('click', fecharModal);

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('purchaseModal');
    if (event.target === modal) {
        fecharModal();
    }
});

// Submete o formulário de compra
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Compra realizada com sucesso!');
    fecharModal();
});

// Chama a função para carregar os produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarProdutos);


// Exemplo de dados de agricultores
const agricultores = [
    { nome: "João da Silva", nota: 4.5, imagem: "../assets/pessoa.png" },
    { nome: "Maria Oliveira", nota: 4.8, imagem: "../assets/pessoa.png" },
    { nome: "Carlos Souza", nota: 4.3, imagem: "../assets/pessoa.png" },
    { nome: "Ana Pereira", nota: 4.9, imagem: "../assets/pessoa.png" },
];

// Função para carregar os agricultores
function carregarAgricultores() {
    const agricultoresGrid = document.querySelector('.agricultores-grid');
    agricultores.forEach(agricultor => {
        const agricultorElement = document.createElement('div');
        agricultorElement.classList.add('agricultor');
        agricultorElement.innerHTML = `
            <img src="${agricultor.imagem}" alt="${agricultor.nome}">
            <h3>${agricultor.nome}</h3>
            <p class="nota">Nota: ${agricultor.nota} ⭐</p>
        `;
        agricultoresGrid.appendChild(agricultorElement);
    });
}

// Chama a função para carregar os agricultores quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarAgricultores(); // Novo
});
