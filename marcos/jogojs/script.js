document.addEventListener('DOMContentLoaded', function () {
    var earth = document.getElementById('earth');
    var gun = document.getElementById('gun');
    var gameSpawn = document.getElementById('area');
    var laser = document.getElementById('laser');
    const maxLives = 3;
    let currentLives = maxLives;
    var gameAudio = document.getElementById('gameaudio');
    var isMuted = false;
    var gameover = false
    var angle;
    var gameOverHud = document.getElementById('gameover');
    var counter = document.getElementById('counter');
    var overCount = document.getElementById('over-count')
    var count = 0
    counter.innerHTML = count
    overCount.innerHTML = count

    gameAudio.volume=0.1

    document.addEventListener('keypress', (event) => {
        let key = event.key;
        if (key === 'm') {
            if (isMuted) {
                isMuted = false
                gameAudio.volume = 0.1
            }
            else {
                isMuted = true
                gameAudio.volume = 0
            }
        }
      }, false);

    // Posicionar a arma no centro da tela inicialmente
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    gun.style.left = centerX + 'px';
    gun.style.top = centerY + 'px';

    window.addEventListener('mousemove', function (e) {
        // Calcular a posição do mouse em relação ao centro da imagem earth
        var mouseX = e.clientX - earth.getBoundingClientRect().left;
        var mouseY = e.clientY - earth.getBoundingClientRect().top;

        // tangente é complicado mesmo, obrigado chatgpt
        angle = Math.atan2(mouseY - earth.clientHeight / 2, mouseX - earth.clientWidth / 2);

        var rotationAngle = angle * (180 / Math.PI) + 92; //Cálculo com ângulos e radianos blabla... Sim, eu coloquei o 92. Não, eu não sei por que funciona
        gun.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg)';

        var laserAngle = angle * (180 / Math.PI) + 92;
        laser.style.transform = 'translate(-50%, -50%) rotate(' + laserAngle + 'deg)';
    });

    var isShooting = false
    console.log(isShooting)

    window.addEventListener('click', function () { //Evitar mútliplos tiros
        if (isShooting) {
            return;
        }
        isShooting = true;

        shoot();
    
        setTimeout(() => {
            hideShoot();
        }, 200);
    
        setTimeout(() => {
            isShooting = false;
        }, 500);
    });
    

    function shoot() { //Atirar
        laser.classList.add('shooting')
        laser.classList.remove('hidden')

        let beamAudio = new Audio('./assets/beam.mp3')
        beamAudio.play();

        let frame = 1;
        const animationInterval = setInterval(() => {
            const imagePath = `./assets/arma-bola/${frame}.png`;
            gun.src = imagePath;

            frame++;

            if (frame > 4) {
                gun.src = './assets/arma-bola/1.png'
                clearInterval(animationInterval);
            }
        }, 50);

        const laserRect = laser.getBoundingClientRect();

        const asteroids = document.querySelectorAll('.asteroid');

        asteroids.forEach((asteroid) => { // Verificar colisão com asteroid
            const asteroidRect = asteroid.getBoundingClientRect();

            if (
                laserRect.right >= asteroidRect.left &&
                laserRect.left <= asteroidRect.right &&
                laserRect.bottom >= asteroidRect.top &&
                laserRect.top <= asteroidRect.bottom
            ) {
                destroyAsteroid(asteroid);
            }
        });
    }

    function destroyAsteroid(asteroid, willCount=true) { // ...
        let frame = 1;

        if (willCount) {
            count++
            counter.innerHTML = count
            overCount.innerHTML = count
        }
        

        const animationInterval = setInterval(() => {
            const imagePath = `./assets/asteroid_explosion/e${frame}.png`;
            asteroid.src = imagePath;

            frame++;

            if (frame > 6) {
                clearInterval(animationInterval);
                asteroid.remove();
            }
        }, 50);
    }


    function hideShoot() {
        laser.classList.remove('shooting')
        laser.classList.add('hidden')
    }

    function spawnAsteroid() {
        if (gameover == true) {
            console.log('finalizado')
            return
        } else {
        const asteroid = document.createElement('img');
        asteroid.classList.add('asteroid');
        const randomAsteroid = Math.floor(Math.random() * 2) + 1; //Aleatorio imagem asteroid
        asteroid.src = `./assets/esteroide${randomAsteroid}.png`;
        asteroid.style.width = `${Math.floor(Math.random() * 120) + 120}px`; //Aleatorio tamanho asteroid
        asteroid.style.height = asteroid.style.width;

        const spawnX = Math.random() < 0.5 ? -50 : window.innerWidth + 50; // spawn à esquerda ou à direita
        const spawnY = Math.random() * window.innerHeight;

        asteroid.style.left = `${spawnX}px`;
        asteroid.style.top = `${spawnY}px`;

        gameSpawn.appendChild(asteroid);

        moveAsteroid(asteroid);
    }
    }

    function moveAsteroid(asteroid) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const asteroidSpeed = Math.random() * 5 + 2;

        function updateAsteroid() {
            const asteroidRect = asteroid.getBoundingClientRect();

            const angle = Math.atan2(centerY - asteroidRect.y - asteroidRect.height / 2, centerX - asteroidRect.x - asteroidRect.width / 2);

            const asteroidXSpeed = asteroidSpeed * Math.cos(angle);
            const asteroidYSpeed = asteroidSpeed * Math.sin(angle);

            asteroid.style.left = asteroidRect.x + asteroidXSpeed + 'px';
            asteroid.style.top = asteroidRect.y + asteroidYSpeed + 'px';

            requestAnimationFrame(() => updateAsteroid(asteroid));
        }

        updateAsteroid();
    }

    setInterval(spawnAsteroid, 3000);
    

    setInterval(checkCollision, 500);

    function checkCollision() {
        const earthRect = earth.getBoundingClientRect();
        const asteroids = document.querySelectorAll('.asteroid');

        asteroids.forEach((asteroid) => {
            const asteroidRect = asteroid.getBoundingClientRect();

            if (
                asteroidRect.right >= earthRect.left &&
                asteroidRect.left <= earthRect.right &&
                asteroidRect.bottom >= earthRect.top &&
                asteroidRect.top <= earthRect.bottom
            ) {
                handleCollision(asteroid);
            }
        });
    }

    function handleCollision(asteroid) {
        destroyAsteroid(asteroid, false); //Destruir asteroid sem contabilizar ponto.

        let damageAudio = new Audio('./assets/damage.mp3')
        damageAudio.play();

        currentLives--;
        console.log(currentLives)
        // Atualizar a imagem da Terra com base na quantidade de vidas
        earth.src = `./assets/terra${currentLives}.png`;

        if (currentLives <= 0) {
            handleGameOverAnimation();
        }
    }

    function handleGameOverAnimation() {
        gameover = true
        
        const asteroids = document.querySelectorAll('.asteroid');
        asteroids.forEach((asteroid) => {
            asteroid.remove()
        })

        gun.remove()

        gameAudio.volume=0
        let endgameAudio = new Audio('./assets/death.wav')
        endgameAudio.play();


        let frame = 1

        const animationInterval = setInterval(() => {
            const imagePath = `./assets/earth_explosion/t${frame}.png`;
            earth.src = imagePath;

            frame++;

            if (frame > 7) {
                clearInterval(animationInterval);
                earth.classList.remove('rotating');
                gameOverHud.classList.remove('hidden');
                gameOverHud.classList.add('end')
            }
        }, 50);
    }
});


