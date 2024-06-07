var typed = new Typed(".text", {
    // Vai ser uma variavel que vai mudar com um tempo padrão, que tem 3 opções: programador, segurança da informação e web desenvolvedor // 
    strings: ["Programação", "Design", "Web Design"],
    typeSpeed: 100, // Demora que vai ter para ele conseguir escrever a variável
    backSpeed: 100, // Tempo que vai demorar para ele fazer a animação de apagar
    backDelay: 1000, // Aqui vai ter o tempo de delay para a animação de apagar acontecer, no caso de 1 segundo, pois está em milissegundos
    loop: true // Vai fazer isso toda vez e nunca vai parar
});

const toTop = document.querySelector(".top");
// Constantes são uma variável que é definida para ficar igual no site inteiro, nessa lógica vai fazer com que cada vez que voce der o scroll a seta vai acompanhar e caso voce clique vai ser redirecionado para o topo do site //
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
