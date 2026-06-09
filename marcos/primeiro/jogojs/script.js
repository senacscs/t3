const DIFFICULTIES = {
    easy: {
        name: 'Fácil',
        lives: 5,
        spawnInterval: 4200,
        minSpeed: 1.2,
        maxSpeed: 3,
        minSize: 100,
        maxSize: 130,
        scoreMultiplier: 1,
        fireRate: 380,
        color: '#4ade80',
    },
    normal: {
        name: 'Normal',
        lives: 3,
        spawnInterval: 3000,
        minSpeed: 2,
        maxSpeed: 5,
        minSize: 110,
        maxSize: 150,
        scoreMultiplier: 1.5,
        fireRate: 320,
        color: '#60a5fa',
    },
    hard: {
        name: 'Difícil',
        lives: 2,
        spawnInterval: 2000,
        minSpeed: 3,
        maxSpeed: 7,
        minSize: 120,
        maxSize: 170,
        scoreMultiplier: 2,
        fireRate: 260,
        color: '#fbbf24',
    },
    insane: {
        name: 'Insano',
        lives: 1,
        spawnInterval: 1100,
        minSpeed: 4.5,
        maxSpeed: 10,
        minSize: 130,
        maxSize: 190,
        scoreMultiplier: 3,
        fireRate: 200,
        color: '#f87171',
    },
};

const WAVE_KILLS = 10;
const COMBO_TIMEOUT = 2000;
const PROJECTILE_SPEED = 14;
const MUZZLE_OFFSET = 78;
const PROJECTILE_HIT_RADIUS = 5;
const EARTH_HIT_RADIUS = 55;

class AsteroidsGame {
    constructor() {
        this.difficultyKey = sessionStorage.getItem('difficulty') || 'normal';
        if (!DIFFICULTIES[this.difficultyKey]) {
            this.difficultyKey = 'normal';
        }
        this.config = { ...DIFFICULTIES[this.difficultyKey] };

        this.earth = document.getElementById('earth');
        this.gun = document.getElementById('gun');
        this.area = document.getElementById('area');
        this.projectilesEl = document.getElementById('projectiles');
        this.muzzleFlashesEl = document.getElementById('muzzle-flashes');
        this.counterEl = document.getElementById('counter');
        this.waveEl = document.getElementById('wave');
        this.comboDisplay = document.getElementById('combo-display');
        this.comboCountEl = document.getElementById('combo-count');
        this.livesDisplay = document.getElementById('lives-display');
        this.difficultyBadge = document.getElementById('difficulty-badge');
        this.waveBanner = document.getElementById('wave-banner');
        this.pauseMenu = document.getElementById('pause-menu');
        this.gameOverHud = document.getElementById('gameover');
        this.overCount = document.getElementById('over-count');
        this.overScore = document.getElementById('over-score');
        this.overWave = document.getElementById('over-wave');
        this.bestScoreEl = document.getElementById('best-score');
        this.newRecordEl = document.getElementById('new-record');
        this.gameAudio = document.getElementById('gameaudio');

        this.score = 0;
        this.kills = 0;
        this.wave = 1;
        this.combo = 0;
        this.comboTimer = 0;
        this.lives = this.config.lives;
        this.maxLives = this.config.lives;
        this.angle = 0;
        this.gameOver = false;
        this.paused = false;
        this.isMuted = false;
        this.wantsFire = false;
        this.lastFireTime = 0;
        this.lastSpawnTime = 0;
        this.spawnInterval = this.config.spawnInterval;

        this.asteroids = [];
        this.projectiles = [];
        this.earthCenter = { x: 0, y: 0 };
        this.gunPivot = { x: 0, y: 0 };

        this.beamAudio = null;
        this.damageAudio = null;

        this.bindEvents();
        this.updateHud();
        this.gameAudio.volume = 0.12;
        this.gameAudio.play().catch(() => {});

        requestAnimationFrame((t) => this.loop(t));
    }

    bindEvents() {
        window.addEventListener('mousemove', (e) => this.aim(e));
        window.addEventListener('mousedown', (e) => {
            if (e.button === 0) this.wantsFire = true;
        });
        window.addEventListener('mouseup', () => { this.wantsFire = false; });
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => {
            if (e.code === 'Space') this.wantsFire = false;
        });
        window.addEventListener('resize', () => this.updateCenters());

        document.getElementById('resume-btn')?.addEventListener('click', () => this.togglePause(false));
    }

    onKeyDown(e) {
        if (e.code === 'KeyM') {
            this.isMuted = !this.isMuted;
            this.gameAudio.volume = this.isMuted ? 0 : 0.12;
            return;
        }
        if (e.code === 'Space') {
            e.preventDefault();
            this.wantsFire = true;
            return;
        }
        if (e.code === 'KeyP' || e.code === 'Escape') {
            if (!this.gameOver) this.togglePause();
        }
    }

    togglePause(force) {
        if (this.gameOver) return;
        this.paused = typeof force === 'boolean' ? force : !this.paused;
        this.pauseMenu.classList.toggle('hidden', !this.paused);
        if (!this.isMuted) {
            this.gameAudio.volume = this.paused ? 0 : 0.12;
        }
    }

    updateCenters() {
        const earthRect = this.earth.getBoundingClientRect();
        this.earthCenter = {
            x: earthRect.left + earthRect.width / 2,
            y: earthRect.top + earthRect.height / 2,
        };
        const gunRect = this.gun.getBoundingClientRect();
        this.gunPivot = {
            x: gunRect.left + gunRect.width / 2,
            y: gunRect.top + gunRect.height * 0.69,
        };
    }

    aim(e) {
        this.updateCenters();
        const mouseX = e.clientX - this.gunPivot.x;
        const mouseY = e.clientY - this.gunPivot.y;
        this.angle = Math.atan2(mouseY, mouseX);
        const rotation = this.angle * (180 / Math.PI) + 92;
        this.gun.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }

    getMuzzlePosition() {
        return {
            x: this.gunPivot.x + Math.cos(this.angle) * MUZZLE_OFFSET,
            y: this.gunPivot.y + Math.sin(this.angle) * MUZZLE_OFFSET,
        };
    }

    loop(timestamp) {
        if (!this.gameOver && !this.paused) {
            const dt = 16;
            this.updateSpawn(timestamp);
            this.updateAsteroids();
            this.updateProjectiles();
            this.updateCombo(timestamp);
            this.tryFire(timestamp);
            this.checkEarthCollisions();
        }
        requestAnimationFrame((t) => this.loop(t));
    }

    updateSpawn(timestamp) {
        if (timestamp - this.lastSpawnTime < this.spawnInterval) return;
        this.lastSpawnTime = timestamp;
        this.spawnAsteroid();
    }

    tryFire(timestamp) {
        if (!this.wantsFire) return;
        if (timestamp - this.lastFireTime < this.config.fireRate) return;
        this.lastFireTime = timestamp;
        this.fire();
    }

    fire() {
        this.updateCenters();
        this.animateGun();
        this.spawnMuzzleFlash();
        this.spawnProjectile();

        if (!this.isMuted) {
            this.beamAudio = new Audio('./assets/beam.mp3');
            this.beamAudio.volume = 0.25;
            this.beamAudio.play().catch(() => {});
        }
    }

    spawnMuzzleFlash() {
        const muzzle = this.getMuzzlePosition();
        const flash = document.createElement('div');
        flash.className = 'muzzle-flash';
        flash.style.left = `${muzzle.x}px`;
        flash.style.top = `${muzzle.y}px`;
        flash.style.setProperty('--flash-angle', `${this.angle}rad`);
        this.muzzleFlashesEl.appendChild(flash);
        flash.addEventListener('animationend', () => flash.remove());
    }

    animateGun() {
        let frame = 1;
        const interval = setInterval(() => {
            this.gun.src = `./assets/arma-bola/${frame}.png`;
            frame++;
            if (frame > 4) {
                this.gun.src = './assets/arma-bola/1.png';
                clearInterval(interval);
            }
        }, 45);
    }

    spawnProjectile() {
        const muzzle = this.getMuzzlePosition();
        const el = document.createElement('div');
        el.className = 'projectile';
        el.innerHTML = '<span class="projectile__trail"></span><span class="projectile__core"></span>';
        el.style.left = `${muzzle.x}px`;
        el.style.top = `${muzzle.y}px`;
        el.style.setProperty('--shot-angle', `${this.angle}rad`);
        this.projectilesEl.appendChild(el);

        this.projectiles.push({
            el,
            x: muzzle.x,
            y: muzzle.y,
            vx: Math.cos(this.angle) * PROJECTILE_SPEED,
            vy: Math.sin(this.angle) * PROJECTILE_SPEED,
            angle: this.angle,
        });
    }

    updateProjectiles() {
        const margin = 80;
        this.projectiles = this.projectiles.filter((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.el.style.left = `${p.x}px`;
            p.el.style.top = `${p.y}px`;

            const tipX = p.x + Math.cos(p.angle) * 6;
            const tipY = p.y + Math.sin(p.angle) * 6;

            let hit = false;
            for (let i = this.asteroids.length - 1; i >= 0; i--) {
                const a = this.asteroids[i];
                if (this.circleHit(tipX, tipY, PROJECTILE_HIT_RADIUS, a.x, a.y, a.radius)) {
                    this.destroyAsteroid(a);
                    hit = true;
                    break;
                }
            }

            if (hit) {
                p.el.remove();
                return false;
            }

            const offScreen = p.x < -margin || p.x > window.innerWidth + margin
                || p.y < -margin || p.y > window.innerHeight + margin;
            if (offScreen) {
                p.el.remove();
                return false;
            }
            return true;
        });
    }

    circleHit(x1, y1, r1, x2, y2, r2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return dx * dx + dy * dy <= (r1 + r2) ** 2;
    }

    spawnAsteroid() {
        const size = this.rand(this.config.minSize, this.config.maxSize);
        const speed = this.rand(this.config.minSpeed, this.config.maxSpeed) * (1 + (this.wave - 1) * 0.08);

        const fromLeft = Math.random() < 0.5;
        const x = fromLeft ? -size : window.innerWidth + size;
        const y = Math.random() * window.innerHeight;

        const el = document.createElement('img');
        el.className = 'asteroid';
        el.src = `./assets/esteroide${Math.floor(Math.random() * 2) + 1}.png`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        this.area.appendChild(el);

        const asteroid = {
            el,
            x: x + size / 2,
            y: y + size / 2,
            size,
            radius: size * 0.42,
            speed,
            spin: (Math.random() - 0.5) * 4,
            rotation: Math.random() * 360,
            destroying: false,
        };
        this.asteroids.push(asteroid);
    }

    updateAsteroids() {
        this.updateCenters();
        this.asteroids.forEach((a) => {
            if (a.destroying) return;
            const dx = this.earthCenter.x - a.x;
            const dy = this.earthCenter.y - a.y;
            const dist = Math.hypot(dx, dy) || 1;
            a.x += (dx / dist) * a.speed;
            a.y += (dy / dist) * a.speed;
            a.rotation += a.spin;
            a.el.style.left = `${a.x - a.size / 2}px`;
            a.el.style.top = `${a.y - a.size / 2}px`;
            a.el.style.transform = `rotate(${a.rotation}deg)`;
        });
    }

    destroyAsteroid(asteroid, countScore = true) {
        if (asteroid.destroying) return;
        asteroid.destroying = true;

        const idx = this.asteroids.indexOf(asteroid);
        if (idx !== -1) this.asteroids.splice(idx, 1);

        if (countScore) {
            const points = Math.round((asteroid.size / 100) * this.config.scoreMultiplier * (1 + this.combo * 0.1));
            this.score += Math.max(1, points);
            this.combo++;
            this.comboTimer = performance.now() + COMBO_TIMEOUT;
            this.kills++;
            this.checkWave();
        }

        let frame = 1;
        const interval = setInterval(() => {
            asteroid.el.src = `./assets/asteroid_explosion/e${frame}.png`;
            frame++;
            if (frame > 6) {
                clearInterval(interval);
                asteroid.el.remove();
            }
        }, 45);

        this.updateHud();
    }

    checkWave() {
        const newWave = Math.floor(this.kills / WAVE_KILLS) + 1;
        if (newWave > this.wave) {
            this.wave = newWave;
            this.spawnInterval = Math.max(700, this.config.spawnInterval - (this.wave - 1) * 180);
            this.showWaveBanner();
        }
    }

    showWaveBanner() {
        this.waveBanner.textContent = `Onda ${this.wave}`;
        this.waveBanner.classList.remove('hidden');
        setTimeout(() => this.waveBanner.classList.add('hidden'), 2200);
    }

    updateCombo(timestamp) {
        if (this.combo > 1 && timestamp > this.comboTimer) {
            this.combo = 0;
            this.comboDisplay.classList.add('hidden');
        } else if (this.combo > 1) {
            this.comboCountEl.textContent = `x${this.combo}`;
            this.comboDisplay.classList.remove('hidden');
        }
    }

    checkEarthCollisions() {
        this.updateCenters();
        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const a = this.asteroids[i];
            if (a.destroying) continue;
            const dist = Math.hypot(a.x - this.earthCenter.x, a.y - this.earthCenter.y);
            if (dist < EARTH_HIT_RADIUS + a.radius * 0.5) {
                this.handleEarthHit(a);
            }
        }
    }

    handleEarthHit(asteroid) {
        this.destroyAsteroid(asteroid, false);
        this.combo = 0;
        this.comboDisplay.classList.add('hidden');

        if (!this.isMuted) {
            this.damageAudio = new Audio('./assets/damage.mp3');
            this.damageAudio.volume = 0.4;
            this.damageAudio.play().catch(() => {});
        }

        this.lives--;
        this.area.classList.add('shake');
        setTimeout(() => this.area.classList.remove('shake'), 400);

        const earthFrame = Math.max(1, this.lives);
        this.earth.src = earthFrame >= this.maxLives
            ? './assets/earth.png'
            : `./assets/terra${earthFrame}.png`;

        this.updateHud();

        if (this.lives <= 0) {
            this.triggerGameOver();
        }
    }

    updateHud() {
        this.counterEl.textContent = this.score;
        this.waveEl.textContent = this.wave;
        this.difficultyBadge.textContent = this.config.name;
        this.difficultyBadge.style.setProperty('--badge-color', this.config.color);

        this.livesDisplay.innerHTML = '';
        for (let i = 0; i < this.maxLives; i++) {
            const heart = document.createElement('span');
            heart.className = 'hud__life' + (i < this.lives ? '' : ' hud__life--lost');
            heart.textContent = '♥';
            this.livesDisplay.appendChild(heart);
        }
    }

    getHighScore() {
        return parseInt(localStorage.getItem(`asteroids_highscore_${this.difficultyKey}`) || '0', 10);
    }

    saveHighScore() {
        const current = this.getHighScore();
        if (this.score > current) {
            localStorage.setItem(`asteroids_highscore_${this.difficultyKey}`, String(this.score));
            return true;
        }
        return false;
    }

    triggerGameOver() {
        this.gameOver = true;
        this.wantsFire = false;

        this.asteroids.forEach((a) => a.el.remove());
        this.asteroids = [];
        this.projectiles.forEach((p) => p.el.remove());
        this.projectiles = [];
        this.gun.remove();

        this.gameAudio.volume = 0;
        if (!this.isMuted) {
            const endAudio = new Audio('./assets/death.wav');
            endAudio.volume = 0.5;
            endAudio.play().catch(() => {});
        }

        let frame = 1;
        const interval = setInterval(() => {
            this.earth.src = `./assets/earth_explosion/t${frame}.png`;
            frame++;
            if (frame > 7) {
                clearInterval(interval);
                this.earth.classList.remove('rotating');
                this.showGameOver();
            }
        }, 50);
    }

    showGameOver() {
        const isRecord = this.saveHighScore();
        this.overCount.textContent = this.kills;
        this.overScore.textContent = this.score;
        this.overWave.textContent = this.wave;
        this.bestScoreEl.textContent = this.getHighScore();
        this.newRecordEl.classList.toggle('hidden', !isRecord);
        this.gameOverHud.classList.remove('hidden');

        const retry = document.getElementById('retry-btn');
        if (retry) {
            retry.href = `./game.html`;
            sessionStorage.setItem('difficulty', this.difficultyKey);
        }
    }

    rand(min, max) {
        return min + Math.random() * (max - min);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('difficulty')) {
        sessionStorage.setItem('difficulty', 'normal');
    }
    new AsteroidsGame();
});
