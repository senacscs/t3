const products = [
    { id: 1, name: "EcoPower 3000", description: "A EcoPower 3000 é uma bateria reutilizável de alta capacidade eutilizável de alta capa eutilizável de alta capa, ideal para dispositivos eletrônicos de uso diário. Com 3000mAh, ela oferece uma longa duração e pode ser recarregada mais de 1000 vezes, tornando-a uma escolha econômica e ecológica.", image: "URL_DA_IMAGEM_ECOPOWER" },
    { id: 2, name: "GreenCell Pro", description: "A GreenCell Pro é uma bateria reutilizável voltada para usuários profissionais. Com uma capacidade de 3500mAh, ela garante energia confiável para câmeras, drones e outros dispositivos exigentes. Seu design robusto e alta eficiência de carga a tornam uma excelente opção para quem precisa de desempenho superior.", image: "URL_DA_IMAGEM_GREENCELL" },
    { id: 3, name: "ReCharge Ultra", description: "A ReCharge Ultra é conhecida por seu tempo de recarga rápido e sua durabilidade excepcional. Com 2800mAh, esta bateria é perfeita para controles remotos, lanternas e brinquedos eletrônicos. Sua tecnologia avançada permite até 1200 ciclos de recarga sem perda significativa de capacidade.", image: "URL_DA_IMAGEM_RECHARGE" },
    { id: 4, name: "SolarBoost Max", description: "A SolarBoost Max é uma bateria reutilizável que pode ser recarregada tanto por energia elétrica quanto solar. Com 3200mAh, ela é ideal para uso em áreas remotas ou para entusiastas de atividades ao ar livre. Sua versatilidade, e suas caracteristicas", image: "URL_DA_IMAGEM_SOLARBOOST" },
    { id: 5, name: "EnviroCell 2500", description: "A EnviroCell 2500 é uma bateria reutilizável de 2500mAh, projetada com materiais reciclados e eco-friendly. Perfeita para dispositivos de baixo consumo, como relógios e controles, ela oferece uma combinação de desempenho confiável e compromisso ambiental.", image: "URL_DA_IMAGEM_ENVIROCELL" },
    { id: 6, name: "PowerLite X", description: "A PowerLite X é uma bateria reutilizável compacta e poderosa, com 2700mAh de capacidade. Sua leveza e eficiência a tornam ideal para dispositivos portáteis como câmeras de ação e leitores de e-book. Com mais de 1000 ciclos de recarga.", image: "URL_DA_IMAGEM_POWERLITE" },
];
 
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    const searchBar = document.getElementById("search-bar");
    const suggestionsList = document.getElementById("suggestions-list");
 
    const displayProducts = (items) => {
        productsContainer.innerHTML = "";
        items.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <button>Comprar</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    };
 
    const displaySuggestions = (items) => {
        suggestionsList.innerHTML = "";
        if (items.length > 0) {
            suggestionsList.style.display = "block";
            items.forEach((product) => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = product.name;
                suggestionItem.addEventListener("click", () => {
                    searchBar.value = product.name;
                    suggestionsList.innerHTML = "";
                    suggestionsList.style.display = "none";
                    displayProducts([product]);
                });
                suggestionsList.appendChild(suggestionItem);
            });
        } else {
            suggestionsList.style.display = "none";
        }
    };
 
    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displaySuggestions(filteredProducts);
        displayProducts(filteredProducts);
    });
 
    searchBar.addEventListener("blur", () => {
        setTimeout(() => {
            suggestionsList.style.display = "none";
        }, 200); // Pequeno atraso para permitir o clique nas sugestões
    });
 
    searchBar.addEventListener("focus", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displaySuggestions(filteredProducts);
    });
 
    displayProducts(products); // Exibir todos os produtos inicialmente
});