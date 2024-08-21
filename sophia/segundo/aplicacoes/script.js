const recyclableItems = {
    "papel:" :"azul",
    "papelão": "azul",
    "jornais": "azul",
    "jornal": "azul",
    "revistas": "azul",
    "revista": "azul",
    "folhas de caderno": "azul",
    "folha de caderno": "azul",
    "caixas de papelão": "azul",
    "caixa de papelão": "azul",
    "embalagens de papel": "azul",
    "embalagem de papel": "azul",
    "cartões": "azul",
    "cartões de papel": "azul",
    "plástico": "vermelho",
    "plastico": "vermelho",
    "garrafas PET": "vermelho",
    "garrafinha": "vermelho",
    "Garrafa de plastico" : "vermelho",
    "Garrafa de plástico": "vermelho",
    "PET": "vermelho",
    "embalagens de plástico": "vermelho",
    "embalagem de plástico": "vermelho",
    "sacolas plásticas": "vermelho",
    "sacola plástica": "vermelho",
    "copos plásticos": "vermelho",
    "copo plástico": "vermelho",
    "potes de iogurte": "vermelho",
    "pote de iogurte": "vermelho",
    "tampas de plástico": "vermelho",
    "tampa de plástico": "vermelho",
    "tampinha": "vermelho",
    "tampinhas": "vermelho",
    "tampinha de plastico": "vermelho",
    "tampinha de plástico": "vermelho",
    "tampinhas de plastico": "vermelho",
    "tampinhas de plástico": "vermelho",
    "potes de alimentos": "vermelho",
    "tubos e canos plásticos": "vermelho",
    vidro: "verde",
    "garrafas de vidro": "verde",
    "garrafa de vidro": "verde",
    "potes de vidro": "verde",
    "pote de vidro": "verde",
    "frascos de vidro": "verde",
    "frasco de vidro": "verde",
    "cacos de vidro": "verde",
    "caco de vidro": "verde",
    "vidros planos": "verde",
    metal: "amarelo",
    aço: "amarelo",
    ferro: "amarelo",
    metais: "amarelo",
    "latas de alumínio": "amarelo",
    latinha: "amarelo",
    latinhas: "amarelo",
    lata: "amarelo",
    latas: "amarelo",
    "latas de aço": "amarelo",
    "tampas metálicas": "amarelo",
    "embalagens de alumínio": "amarelo",
    ferragens: "amarelo",
    "papel alumínio": "amarelo",
    tetrapak: "amarelo",
    "caixas de leite": "amarelo",
    "caixas de suco": "amarelo",
    eletrônicos: "amarelo",
    "celulares antigos": "amarelo",
    computadores: "amarelo",
    baterias: "amarelo",
    "aparelhos eletrodomésticos pequenos": "amarelo",
    madeira: "preto",
    serragem: "preto",
    tábuas: "preto",
    tábua: "preto",
    tabua: "preto",
    tabuas: "preto",
    "móveis de madeira": "preto",
    paletes: "preto",
    caixotes: "preto",
    "resíduos perigosos": "laranja",
    pilhas: "laranja",
    baterias: "laranja",
    "produtos químicos": "laranja",
    "lâmpadas fluorescentes": "laranja",
    tintas: "laranja",
    tinta: "laranja",
    "resíduos de hospitais e serviços de saúde": "branco",
    resíduos: "branco",
    resíduo: "branco",
    residuos: "branco",
    residuo: "branco",
    "algodões usados": "branco",
    ataduras: "branco",
    "materiais cirúrgicos": "branco",
    agulhas: "branco",
    agulha: "branco",
    "lixo radioativo": "roxo",
    "materiais de laboratórios de radiologia": "roxo",
    "equipamentos de radioterapia": "roxo"
};
// Lista de tipos de lixo orgânicos
const organicItems = [
    "restos de comida",
    "resto de comida",
    "casca de fruta",
    "cascas de frutas",
    "casca de legume",
    "cascas de legumes",
    "borra de café",
    "borra de cafe",
    "borra café",
    "café", "cafe", 
    "folhas",
    "folha",
    "galhos",
    "galho",
    "grama",
    "ovos",
    "ovo",
    "pão",
    "casca de ovo", "ossos", "pães e massas", "folha seca", "saquinho de chá", "borra de cafe", "casca de nozes", "alimentos estragados",
    "sementes",
    "semente",
    "flores",
    "flor",
    "ervas daninhas", "casca de banana", "pele de banana", "casca", "cascas", "casca de fruta",
        "cascas de maçã", "casca de maçã", "pele de maçã",
        "cascas de laranja", "casca de laranja", "pele de laranja",
        "cascas de limão", "casca de limão", "pele de limão",
        "cascas de abacate", "casca de abacate", "pele de abacate",
        "cascas de batata", "casca de batata", "pele de batata",
        "cascas de cenoura", "casca de cenoura", "pele de cenoura",
        "cascas de beterraba", "casca de beterraba", "pele de beterraba",
        "cascas de manga", "casca de manga", "pele de manga",
        "cascas de mamão", "casca de mamão", "pele de mamão",
        "cascas de melão", "casca de melão", "pele de melão",
        "cascas de melancia", "casca de melancia", "pele de melancia",
        "cascas de pepino", "casca de pepino", "pele de pepino",
        "cascas de abobrinha", "casca de abobrinha", "pele de abobrinha",
        "cascas de abacaxi", "casca de abacaxi", "pele de abacaxi",
        "cascas de pêssego", "casca de pêssego", "pele de pêssego",
        "cascas de nectarina", "casca de nectarina", "pele de nectarina",
        "cascas de pera", "casca de pera", "pele de pera",
        "cascas de kiwi", "casca de kiwi", "pele de kiwi",
        "cascas de maracujá", "casca de maracujá", "pele de maracujá",
        "cascas de coco", "casca de coco", "pele de coco",
        "cascas de tomate", "casca de tomate", "pele de tomate",
        "cascas de berinjela", "casca de berinjela", "pele de berinjela",
        "cascas de batata-doce", "casca de batata-doce", "pele de batata-doce",
        "cascas de chuchu", "casca de chuchu", "pele de chuchu",
        "cascas de inhame", "casca de inhame", "pele de inhame",
        "cascas de carambola", "casca de carambola", "pele de carambola",
        "cascas de goiaba", "casca de goiaba", "pele de goiaba",
        "cascas de tangerina", "casca de tangerina", "pele de tangerina",
        "cascas de caju", "casca de caju", "pele de caju",
        "cascas de jabuticaba", "casca de jabuticaba", "pele de jabuticaba",
        "cascas de lichia", "casca de lichia", "pele de lichia",
        "cascas de graviola", "casca de graviola", "pele de graviola",
        "cascas de morango", "casca de morango", 
        "cascas de ameixa", "casca de ameixa", "pele de ameixa",
        "cascas de figo", "casca de figo", "pele de figo",
        "cascas de uva", "casca de uva", "pele de uva",
        "cascas de abóbora", "casca de abóbora", "pele de abóbora",
        "cascas de pepino japonês"
        ];

// Lista de cores das lixeiras
const binColors = {
    azul: "Recicláveis (Papel/Papelão)",
    vermelho: "Recicláveis (Plástico)",
    verde: "Recicláveis (Vidro)",
    amarelo: "Recicláveis (Metal)",
    preto: "Recicláveis (Madeira)",
    laranja: "Resíduos Perigosos",
    branco: "Resíduos de Hospitais e Serviços de Saúde",
    roxo: "Lixo Radioativo",
    marrom: "Orgânicos",
    cinza: "Não Recicláveis ou Contaminados"
};

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    var input = document.querySelector('.input-box').value.toLowerCase(); // Obtém o valor da entrada e converte para minúsculas
    var results = document.getElementById('results'); // Obtém a seção de resultados

    // Limpa resultados anteriores
    results.innerHTML = '';

    var resultItem = document.createElement('div');
    
    // Verifica se o item digitado é reciclável ou orgânico
    if (recyclableItems[input]) {
        const binColor = recyclableItems[input];
        resultItem.innerHTML = `
            <p>${input.charAt(0).toUpperCase() + input.slice(1)} é reciclável.</p>
            <p>Coloque na lixeira ${binColors[binColor]} (${binColor}).</p>
        `;
        resultItem.className = `result-item ${binColor}`;
    } else if (organicItems.includes(input)) {
        resultItem.innerHTML = `
            <p>${input.charAt(0).toUpperCase() + input.slice(1)} é orgânico.</p>
            <p>Coloque na lixeira ${binColors.marrom} (marrom).</p>
        `;
        resultItem.className = 'result-item marrom';
    } else {
        resultItem.innerHTML = `
            <p>${input.charAt(0).toUpperCase() + input.slice(1)} não é reciclável nem orgânico.</p>
            <p>Coloque na lixeira ${binColors.cinza} (cinza).</p>
        `;
        resultItem.className = 'result-item cinza';
    }

    results.appendChild(resultItem);

    // Limpa o campo de entrada
    document.querySelector('.input-box').value = '';
});