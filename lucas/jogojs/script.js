const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace
    ('px', '');

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './assets/game-over.gif';
        mario.style.width = '220px'
        mario.style.marginleft = '0px'

        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown' , jump);  