const produtos = [
    { nome: "Queijo Mussarela", link: "./alimentos/queijo.html", img: "./assets/queijo.png" },
    { nome: "Paçoca", link: "./alimentos/pacoca.html", img: "./assets/pacoca.png" },
    { nome: "Pão Integral", link: "./alimentos/paointegral.html", img: "./assets/pao.png" },
    { nome: "Ovo Cozido", link: "./alimentos/ovo.html", img: "./assets/ovocozido.png" },
    { nome: "Bolo Amanteigado", link: "./alimentos/boloaman.html", img: "./assets/boloamanteigado.png" }
  ];

  const searchInput = document.getElementById('search-input');
  const suggestionBox = document.createElement('search-bar');
  suggestionBox.classList.add('suggestions');
  document.querySelector('.search-bar').appendChild(suggestionBox);

  // Função para filtrar e mostrar sugestões
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = '';

    if (query) {
      const filteredProducts = produtos.filter(produto => produto.nome.toLowerCase().includes(query));

      filteredProducts.forEach(produto => {
        const suggestionItem = document.createElement('search-bar');
        suggestionItem.classList.add('suggestion-item');

        suggestionItem.innerHTML = `
          <img src="${produto.img}" alt="${produto.nome}">
          <span>${produto.nome}</span>
        `;

        suggestionItem.addEventListener('click', () => {
          window.location.href = produto.link;
        });

        suggestionBox.appendChild(suggestionItem);
      });
    }
  });