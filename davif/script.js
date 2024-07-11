const frutas = [
    {
        nome: 'Maçã',
        descricao: 'Fruta rica em fibras e vitaminas.',
        preco: 5,
        imagem: '<img src="https://cdn.pixabay.com/photo/2018/08/02/13/02/apple-3580502_1280.jpg" alt="Maçã">',
        info: 'A maçã é rica em fibras, vitaminas e antioxidantes. Ajuda na digestão e promove a saúde do coração.'
    },
    {
        nome: 'Laranja',
        descricao: 'Rica em vitamina C, ajuda na imunidade.',
        preco: 4,
        imagem: '<img src="https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg" alt="Laranja">',
        info: 'A laranja é uma excelente fonte de vitamina C, fibra e antioxidantes. Fortalece o sistema imunológico e melhora a saúde da pele.'
    },
    {
        nome: 'Abacaxi',
        descricao: 'Fruta tropical que auxilia na digestão.',
        preco: 8,
        imagem: '<img src="https://cdn.pixabay.com/photo/2016/03/05/22/29/abstract-1238277_1280.jpg" alt="Abacaxi">',
        info: 'O abacaxi é rico em vitamina C, manganês e enzimas digestivas. Promove a digestão e tem propriedades anti-inflamatórias.'
    },
    {
        nome: 'Uva',
        descricao: 'Ótima fonte de vitaminas e minerais.',
        preco: 7,
        imagem: '<img src="https://cdn.pixabay.com/photo/2016/10/20/21/15/grapes-1751336_1280.jpg" alt="Uva">',
        info: 'A uva é rica em vitamina K, vitamina C e antioxidantes. Melhora a saúde do coração e tem propriedades anti-inflamatórias.'
    },
    {
        nome: 'Melancia',
        descricao: 'Refrescante e hidratante.',
        preco: 12,
        imagem: '<img src="https://cdn.pixabay.com/photo/2016/08/09/19/13/watermelon-1583404_1280.jpg" alt="Melancia">',
        info: 'A melancia é composta principalmente de água e é rica em vitamina C, vitamina A e antioxidantes. Hidrata e promove a saúde da pele.'
    },
    {
        nome: 'Pera',
        descricao: 'Rica em fibras e vitamina C.',
        preco: 6,
        imagem: '<img src="https://cdn.pixabay.com/photo/2017/03/21/10/44/pears-2161699_1280.jpg" alt="Pera">',
        info: 'A pera é uma boa fonte de fibras, vitamina C e potássio. Ajuda na digestão e na saúde do coração.'
    },
    {
        nome: 'Kiwi',
        descricao: 'Fonte de vitamina C e E.',
        preco: 9,
        imagem: '<img src="https://cdn.pixabay.com/photo/2016/11/21/15/09/kiwi-1840281_1280.jpg" alt="Kiwi">',
        info: 'O kiwi é excepcionalmente rico em vitamina C, vitamina K e vitamina E. Melhora a imunidade e a saúde digestiva.'
    },
    {
        nome: 'Manga',
        descricao: 'Fruta tropical deliciosa e nutritiva.',
        preco: 5,
        imagem: '<img src="https://cdn.pixabay.com/photo/2016/02/23/17/38/mango-1218123_1280.jpg" alt="Manga">',
        info: 'A manga é rica em vitamina C, vitamina A e fibras. Ajuda na digestão e melhora a saúde da pele.'
    }
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
