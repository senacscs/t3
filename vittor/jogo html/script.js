const mario = document.querySelector('.mario'); // cria a variavel para o mario
const pipe = document.querySelector('.pipe'); // cria a variavel para o pipe
const startGame = document.querySelector('.start-game'); // cria a variavel para o mario

// cria a função para o evento de clique
const jump = () => {
    mario.classList.add('jump'); // adiciona a classe de pulo ao mario

    setTimeout(() => {
        mario.classList.remove('jump'); // remove a classe de pulo ao mario após os 500ms
    }, 500);
}

// cria a função para o evento quando o mario encostar na pipe
const loop = setInterval(() => { 
    const pipePosition = pipe.offsetLeft; // cria a variavel para a posição do pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // cria a variavel para a posição do mario e converte de string para number

    // condição que verifica se o jogo acabou
    // verifica se o mario está encostado na pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { // se a posição do pipe for menor ou igual ao 120px e a altura do mario for menor a 80px
       
    pipe.style.animation = 'none'; // remove a animação do pipe
       pipe.style.left = '${pipePosition}px'; //  mantém a posição do pipe na mesma posição

       mario.style.animation = 'none'; // remove a animação do mario
       mario.style.bottom = '${marioPosition}px'; //  mantém a posição do mario na mesma posição

       mario.src = 'img/mario-dead.png'; // troca a imagem do mario para a imagem de morte
       mario.style.width = '75px'; // diminui a largura do mario para 75px
       mario.style.marginLeft = '80px'; // diminui a margem esquerda do mario para 50px

       startGame.src = 'img/gameover.png'; // troca a imagem do start game para a imagem de game over

       clearInterval(loop); // para o loop
       
       document.addEventListener('keydown', () => {
        location.reload(); // recarrega a página
    });
    
    }
    
}, 10); // cria a variavel para o loop

// adiciona o evento de clique ao mario
document.addEventListener('keydown', jump); 