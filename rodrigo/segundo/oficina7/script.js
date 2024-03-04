let products = [] // Declara uma variável para armazenar os produtos obtidos do arquivo JSON
let lines // Variável para armazenar as linhas (elementos) que representam os produtos na interface

// Função assíncrona para buscar dados do arquivo JSON
async function fetchData() {
    try {
        // Faz uma requisição assíncrona para obter os dados do arquivo JSON
        const response = await fetch('./data.json');
        // Faz o parsing da resposta como JSON e armazena os produtos na variável products
        const json = await response.json();
        products = json;
        // Chama a função para gerar os produtos na interface
        generateProducts();
        // Seleciona todos os elementos com a classe 'product' e os armazena em lines
        lines = document.querySelectorAll('.product')
        console.log('fetch');
    } catch (error) {
        console.error('Erro ao processar dados:', error);
    }
}

// Seleciona a seção onde os produtos serão exibidos na interface
const section = document.getElementById('products')

// Função para gerar os produtos na interface
function generateProducts(){
    // Itera sobre cada produto da lista
    products.forEach((product) => {
        // Cria os elementos HTML para exibir os detalhes do produto
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const cat = document.createElement('p')
        const ori = document.createElement('p')
        const pre = document.createElement('p')
        const est = document.createElement('p')

        // Adiciona a classe 'product' ao elemento div e define o atributo 'data-title' com o nome do produto
        div.classList.add('product')
        div.dataset.title = product.nome
        // Define o conteúdo de cada elemento com os detalhes do produto
        h2.innerHTML = product.nome
        cat.innerHTML = 'Categoria: ' + product.tipo
        ori.innerHTML = 'Origem: ' + product.origem
        pre.innerHTML = 'Preço: R$' + product.preco
        est.innerHTML = 'Estoque: ' + product.estoque
        
        // Adiciona os elementos filhos ao elemento div
        div.appendChild(h2)
        div.appendChild(cat)
        div.appendChild(ori)
        div.appendChild(pre)
        div.appendChild(est)
        // Adiciona o elemento div à seção de produtos na interface
        section.appendChild(div)
    })
}

// Seleciona o elemento de entrada (input) na interface
const inputElement = document.querySelector("input")

// Função para remover acentuação de uma string
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Event listener para o evento de entrada de texto no input
inputElement.addEventListener("input", (e) => {
    // Obtém o texto inserido no input, converte para minúsculas e remove a acentuação
    let inputed = removeAccents(e.target.value.toLowerCase())

    // Itera sobre cada linha (produto) na interface
    lines.forEach((line) => {
        // Obtém o nome do produto da linha, converte para minúsculas e remove a acentuação
        let text = removeAccents(line.dataset.title.toLowerCase());

        // Define o estilo de exibição da linha como 'block' (exibida)
        line.style.display = "block";

        // Se o nome do produto não contém o texto inserido, oculta a linha
        if (!text.includes(inputed)) {
            line.style.display = "none"; 
        }
    });
});

// Chama a função fetchData para iniciar o processo de busca e exibição dos produtos na interface
fetchData()