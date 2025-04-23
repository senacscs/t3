let clicks = 0;
let multiplicador = 1.0;
let custoMultiplicador = 5;
let autoClickerRate = 0;
let custoAutoClicker = 10;

// Novos upgrades
let cozinheiros = 0;
let custoCozinheiros = 25;
let foodTruck = 0;
let custoFoodTruck = 50;
let restaurante = 0;
let custoRestaurante = 100;
let cestasComunitarias = 0;
let custoCestas = 150;
let festival = 0;
let custoFestival = 200;
let receitaSecreta = 0;
let custoReceita = 300;
let parcerias = 0;
let custoParcerias = 400;
let livroReceitas = 0;
let custoLivro = 500;
let appEntregas = 0;
let custoApp = 600;

// Bônus e multiplicadores
let bonusCestas = 0;
let multiplicadorFestival = 1;
let bonusReceita = 1;
let bonusLivro = 1;
let bonusApp = 1;

function contarCliques() {
    // Adiciona clicks com multiplicador
    clicks += multiplicador;
    // Arredonda para 1 casa decimal
    clicks = Number(clicks.toFixed(1));
    
    // Atualiza o contador
    document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
    
    // Atualiza estado dos botões
    atualizarBotoes();
    
    // Efeito de escala na imagem
    const img = document.querySelector('.clickable-image');
    img.style.transform = 'scale(0.9)';
    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 100);
}

function comprarMultiplicador() {
    if (clicks >= custoMultiplicador) {
        // Deduz o custo
        clicks -= custoMultiplicador;
        
        // Aumenta o multiplicador
        multiplicador += 0.1;
        multiplicador = Math.round(multiplicador * 10) / 10;
        
        // Aumenta o custo do próximo multiplicador
        custoMultiplicador = Math.round(custoMultiplicador * 1.18);
        
        // Atualiza displays
        document.getElementById('multiplicador').textContent = `Multiplicador atual: ${multiplicador}x`;
        document.getElementById('custoMultiplicador').textContent = `Custo: ${custoMultiplicador} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        
        // Efeito visual no multiplicador
        const multBox = document.querySelector('.multiplier-box');
        multBox.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
        setTimeout(() => {
            multBox.style.backgroundColor = '';
        }, 300);
        
        // Atualiza estado dos botões
        atualizarBotoes();
    }
}

function comprarAutoClicker() {
    if (clicks >= custoAutoClicker) {
        // Deduz o custo
        clicks -= custoAutoClicker;
        
        // Aumenta a taxa de produção
        autoClickerRate += 0.1;
        autoClickerRate = Math.round(autoClickerRate * 10) / 10;
        
        // Aumenta o custo do próximo auto clicker
        custoAutoClicker = Math.round(custoAutoClicker * 1.18);
        
        // Atualiza displays
        document.getElementById('autoClickerRate').textContent = `Produção: ${autoClickerRate.toFixed(1)} por segundo`;
        document.getElementById('custoAutoClicker').textContent = `Custo: ${custoAutoClicker} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        
        // Efeito visual na fritadeira
        const autoBox = document.querySelectorAll('.multiplier-box')[1];
        autoBox.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
        setTimeout(() => {
            autoBox.style.backgroundColor = '';
        }, 300);
        
        // Atualiza estado dos botões
        atualizarBotoes();
    }
}

function atualizarBotoes() {
    // Atualiza botão do multiplicador
    const botaoMult = document.getElementById('botaoMultiplicador');
    botaoMult.disabled = clicks < custoMultiplicador;
    
    // Atualiza botão do auto clicker
    const botaoAuto = document.getElementById('botaoAutoClicker');
    botaoAuto.disabled = clicks < custoAutoClicker;
    
    // Atualiza botões dos novos upgrades
    document.getElementById('botaoCozinheiros').disabled = clicks < custoCozinheiros;
    document.getElementById('botaoFoodTruck').disabled = clicks < custoFoodTruck;
    document.getElementById('botaoRestaurante').disabled = clicks < custoRestaurante;
    document.getElementById('botaoCestas').disabled = clicks < custoCestas;
    document.getElementById('botaoFestival').disabled = clicks < custoFestival;
    document.getElementById('botaoReceita').disabled = clicks < custoReceita;
    document.getElementById('botaoParcerias').disabled = clicks < custoParcerias;
    document.getElementById('botaoLivro').disabled = clicks < custoLivro;
    document.getElementById('botaoApp').disabled = clicks < custoApp;
}

// Função para produção automática
function producaoAutomatica() {
    if (autoClickerRate > 0 || cozinheiros > 0 || foodTruck > 0 || restaurante > 0 || parcerias > 0) {
        // Produção base
        let producaoBase = autoClickerRate + 
                          (cozinheiros * 0.5) + 
                          (foodTruck * 1.0) + 
                          (restaurante * 2.0) + 
                          (parcerias * 3.0);
        
        // Aplicar multiplicadores
        producaoBase *= multiplicadorFestival * bonusReceita * bonusLivro * bonusApp;
        
        // Adicionar bônus das cestas comunitárias
        if (cestasComunitarias > 0) {
            producaoBase *= (1 + bonusCestas);
        }
        
        clicks += producaoBase;
        clicks = Number(clicks.toFixed(1));
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

// Inicia a produção automática (executa a cada segundo)
setInterval(producaoAutomatica, 1000);

function comprarCozinheiros() {
    if (clicks >= custoCozinheiros) {
        clicks -= custoCozinheiros;
        cozinheiros++;
        custoCozinheiros = Math.round(custoCozinheiros * 1.18);
        document.getElementById('cozinheirosRate').textContent = `Produção: ${(cozinheiros * 0.5).toFixed(1)} por segundo`;
        document.getElementById('custoCozinheiros').textContent = `Custo: ${custoCozinheiros} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarFoodTruck() {
    if (clicks >= custoFoodTruck) {
        clicks -= custoFoodTruck;
        foodTruck++;
        custoFoodTruck = Math.round(custoFoodTruck * 1.18);
        document.getElementById('foodTruckRate').textContent = `Produção: ${(foodTruck * 1.0).toFixed(1)} por segundo`;
        document.getElementById('custoFoodTruck').textContent = `Custo: ${custoFoodTruck} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarRestaurante() {
    if (clicks >= custoRestaurante) {
        clicks -= custoRestaurante;
        restaurante++;
        custoRestaurante = Math.round(custoRestaurante * 1.18);
        document.getElementById('restauranteRate').textContent = `Produção: ${(restaurante * 2.0).toFixed(1)} por segundo`;
        document.getElementById('custoRestaurante').textContent = `Custo: ${custoRestaurante} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarCestas() {
    if (clicks >= custoCestas) {
        clicks -= custoCestas;
        cestasComunitarias++;
        custoCestas = Math.round(custoCestas * 1.18);
        bonusCestas += 0.1;
        document.getElementById('cestasRate').textContent = `Bônus: +${(bonusCestas * 100).toFixed(0)}% a cada 5 minutos`;
        document.getElementById('custoCestas').textContent = `Custo: ${custoCestas} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarFestival() {
    if (clicks >= custoFestival) {
        clicks -= custoFestival;
        festival++;
        custoFestival = Math.round(custoFestival * 1.18);
        multiplicadorFestival += 0.5;
        document.getElementById('festivalRate').textContent = `Multiplicador: ${multiplicadorFestival}x a cada 10 minutos`;
        document.getElementById('custoFestival').textContent = `Custo: ${custoFestival} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarReceita() {
    if (clicks >= custoReceita) {
        clicks -= custoReceita;
        receitaSecreta++;
        custoReceita = Math.round(custoReceita * 1.18);
        bonusReceita += 0.2;
        document.getElementById('receitaRate').textContent = `Bônus: +${(bonusReceita * 100).toFixed(0)}% na produção`;
        document.getElementById('custoReceita').textContent = `Custo: ${custoReceita} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarParcerias() {
    if (clicks >= custoParcerias) {
        clicks -= custoParcerias;
        parcerias++;
        custoParcerias = Math.round(custoParcerias * 1.18);
        document.getElementById('parceriasRate').textContent = `Produção: ${(parcerias * 3.0).toFixed(1)} por segundo`;
        document.getElementById('custoParcerias').textContent = `Custo: ${custoParcerias} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarLivro() {
    if (clicks >= custoLivro) {
        clicks -= custoLivro;
        livroReceitas++;
        custoLivro = Math.round(custoLivro * 1.18);
        bonusLivro += 0.3;
        document.getElementById('livroRate').textContent = `Bônus: +${(bonusLivro * 100).toFixed(0)}% em todas as produções`;
        document.getElementById('custoLivro').textContent = `Custo: ${custoLivro} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}

function comprarApp() {
    if (clicks >= custoApp) {
        clicks -= custoApp;
        appEntregas++;
        custoApp = Math.round(custoApp * 1.18);
        bonusApp += 0.4;
        document.getElementById('appRate').textContent = `Bônus: +${(bonusApp * 100).toFixed(0)}% na produção passiva`;
        document.getElementById('custoApp').textContent = `Custo: ${custoApp} Frangos Fritos`;
        document.getElementById('contador').textContent = `Frangos Fritos: ${clicks.toFixed(1)}`;
        atualizarBotoes();
    }
}