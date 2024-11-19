const frutas = [
    {
        nome: 'Prototipo',
        descricao: 'O fio conector na placa BMS é utilizado para conectar a placa à bateria, permitindo a monitorização e controle dos parâmetros da bateria. Esse fio é soldado diretamente na bateria, garantindo uma ligação segura e eficiente, essencial para o funcionamento adequado do sistema de gerenciamento de bateria.',
        preco: 36,
        imagem: '<img src="https://www.unifal-mg.edu.br/portal/wp-content/uploads/sites/52/2024/07/capa_materia_pesquisa-reutilizacao-bateria-notebook_portal-500x278.jpg" alt="Laranja">',
        info: ''
    },
    {
        nome: 'Placa de Proteção de Carga BMS',
        descricao: 'A Placa de Proteção BMS garante a segurança e eficiência de baterias, evitando sobrecarga, descarga excessiva e superaquecimento, além de equilibrar as células e proteger contra curtos-circuitos, prolongando a vida útil das baterias.',
        preco: 16,
        imagem: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRRCoAMHzeMTYwHBIK91cZNLLRu8pRDQLbg&s" alt="Laranja">',
        info: ''
    },
    {
        nome: 'Bateria Li-ion',
        descricao: 'A bateria de lítio é uma bateria recarregável conhecida por sua alta densidade de energia, leveza e longa vida útil. Ela é amplamente usada em eletrônicos, veículos elétricos e dispositivos de armazenamento de energia, devido à sua eficiência e baixa taxa de autodescarga.',
        preco: 13,
        imagem: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVjgpDVGb7kHUNk-Gn8hdMRYCh9Xb-QpzZw&s" alt="Laranja">',
        info: ''
    },
    {
        nome: 'Fio Pequeno',
        descricao: 'O fio conector na placa BMS é utilizado para conectar a placa à bateria, permitindo a monitorização e controle dos parâmetros da bateria. Esse fio é soldado diretamente na bateria, garantindo uma ligação segura e eficiente, essencial para o funcionamento adequado do sistema de gerenciamento de bateria.',
        preco: 7,
        imagem: '<img src="https://m.media-amazon.com/images/I/51Up2PZIYqL._AC_UF894,1000_QL80_.jpg" alt="Laranja">',
        info: ''
    },
    
];


function criarProduto(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';

    const imagem = document.createElement('div');
    imagem.innerHTML = produto.imagem;
    produtoDiv.appendChild(imagem);

    const detalhesDiv = document.createElement('div');
    detalhesDiv.className = 'produto-detalhes';

    const h3 = document.createElement('h3');
    h3.textContent = produto.nome;
    detalhesDiv.appendChild(h3);

    const descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    detalhesDiv.appendChild(descricao);

    const preco = document.createElement('p');
    preco.textContent = `Preço: R$${produto.preco.toFixed(2)}`;
    detalhesDiv.appendChild(preco);

    const button = document.createElement('button');
    button.textContent = 'Mais Informações';
    button.onclick = () => mostrarInformacoes(produto);
    detalhesDiv.appendChild(button);

    produtoDiv.appendChild(detalhesDiv);

    return produtoDiv;
}

function mostrarInformacoes(produto) {
    document.getElementById('modal-titulo').textContent = produto.nome;
    document.getElementById('modal-descricao').textContent = produto.descricao;
    document.getElementById('modal-preco').textContent = `Preço: R$${produto.preco.toFixed(2)}`;
    document.getElementById('modal-info').textContent = produto.info;
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function gerarProdutos() {
    const produtosGrid = document.getElementById('produtos-grid');
    produtosGrid.innerHTML = '';  // Limpa a grade antes de gerar os produtos
    for (let i = 0; i < frutas.length; i++) {
        const produto = frutas[i];
        produtosGrid.appendChild(criarProduto(produto));
    }
}

function filtrarProdutos() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const produtosGrid = document.getElementById('produtos-grid');
    produtosGrid.innerHTML = '';
    for (let i = 0; i < frutas.length; i++) {
        const produto = frutas[i];
        if (produto.nome.toLowerCase().includes(searchValue)) {
            produtosGrid.appendChild(criarProduto(produto));
        }
    }
}

function mostrarAba(aba) {
    const abas = document.querySelectorAll('.aba');
    for (let i = 0; i < abas.length; i++) {
        if (abas[i].id === aba) {
            abas[i].style.display = 'block';
        } else {
            abas[i].style.display = 'none';
        }
    }
}

gerarProdutos();
