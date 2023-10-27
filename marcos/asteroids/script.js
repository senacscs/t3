document.addEventListener('DOMContentLoaded', function () {
    var earth = document.getElementById('earth');
    var gun = document.getElementById('gun');
    var gameSpawn = document.getElementById('area');
    var laser = document.getElementById('laser');
    const maxLives = 3; // Número máximo de vidas da Terra
    let currentLives = maxLives;
    var gameover = false
    var angle;

    // Posicionar a arma no centro da tela inicialmente
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    gun.style.left = centerX + 'px';
    gun.style.top = centerY + 'px';

    window.addEventListener('mousemove', function (e) {
        // Calcular a posição do mouse em relação ao centro da imagem earth
        var mouseX = e.clientX - earth.getBoundingClientRect().left;
        var mouseY = e.clientY - earth.getBoundingClientRect().top;

        // Atualizar a variável angle
        angle = Math.atan2(mouseY - earth.clientHeight / 2, mouseX - earth.clientWidth / 2);

        var rotationAngle = angle * (180 / Math.PI) + 92;
        gun.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg)';

        var laserAngle = angle * (180 / Math.PI) + 92;
        laser.style.transform = 'translate(-50%, -50%) rotate(' + laserAngle + 'deg)';
    });

    var isShooting = false
    console.log(isShooting)

    window.addEventListener('click', function () {
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
    

    function shoot() {
        laser.classList.add('shooting')
        laser.classList.remove('hidden')

        let frame = 1;
        const animationInterval = setInterval(() => {
            const imagePath = `./assets/arma-bola/${frame}.png`; // Substitua pela estrutura real de suas imagens
            gun.src = imagePath;

            frame++;

            if (frame > 4) {
                gun.src = './assets/arma-bola/1.png'
                clearInterval(animationInterval);
            }
        }, 50);

        const laserRect = laser.getBoundingClientRect();

        const asteroids = document.querySelectorAll('.asteroid');

        asteroids.forEach((asteroid) => {
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

    function destroyAsteroid(asteroid) {
        // Adicionar aqui a lógica para a animação de destruição (trocando imagens como um sprite)
        // Por exemplo, algo como:
        let frame = 1;

        const animationInterval = setInterval(() => {
            const imagePath = `./assets/esteroid_explosion/e${frame}.png`; // Substitua pela estrutura real de suas imagens
            asteroid.src = imagePath;

            frame++;

            if (frame > 6) {
                clearInterval(animationInterval);
                asteroid.remove(); // Remover o asteroide do DOM após a animação
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
        const randomAsteroid = Math.floor(Math.random() * 2) + 1;
        asteroid.src = `./assets/esteroide${randomAsteroid}.png`;
        asteroid.style.width = `${Math.floor(Math.random() * 150) + 120}px`;
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

        const asteroidSpeed = Math.random() * 2 + 1;

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
        destroyAsteroid(asteroid);

        currentLives--;
        console.log(currentLives)
        // Atualizar a imagem da Terra com base na quantidade de vidas
        earth.src = `./assets/terra${currentLives}.png`;

        if (currentLives <= 0) {
            // Se não houver mais vidas, inicie a animação de fim do jogo
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

        let endgameAudio = new Audio('./assets/death.wav')
        endgameAudio.play();


        let frame = 1

        const animationInterval = setInterval(() => {
            const imagePath = `./assets/earth_explosion/t${frame}.png`; // Substitua pela estrutura real de suas imagens
            earth.src = imagePath;

            frame++;

            if (frame > 7) {
                clearInterval(animationInterval);
                earth.classList.remove('rotating')
                // window.location()
            }
        }, 50);
    }
});