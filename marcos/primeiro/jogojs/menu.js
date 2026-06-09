const DIFFICULTIES = {
    easy: {
        name: 'Fácil',
        description: '5 vidas · asteroides lentos',
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
        description: '3 vidas · experiência clássica',
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
        description: '2 vidas · enxame rápido',
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
        description: '1 vida · caos total',
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

function getHighScore(key) {
    return parseInt(localStorage.getItem(`asteroids_highscore_${key}`) || '0', 10);
}

function renderDifficultyCards() {
    const grid = document.getElementById('difficulty-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(DIFFICULTIES).map(([key, diff]) => {
        const best = getHighScore(key);
        return `
            <button class="difficulty-card" data-difficulty="${key}" style="--accent: ${diff.color}">
                <span class="difficulty-card__name">${diff.name}</span>
                <span class="difficulty-card__desc">${diff.description}</span>
                <span class="difficulty-card__best">Recorde: ${best}</span>
            </button>
        `;
    }).join('');

    grid.querySelectorAll('.difficulty-card').forEach((card) => {
        card.addEventListener('click', () => {
            const difficulty = card.dataset.difficulty;
            sessionStorage.setItem('difficulty', difficulty);
            window.location.href = './game.html';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderDifficultyCards();

    const audio = new Audio('./assets/menu.wav');
    audio.volume = 0.35;
    audio.play().catch(() => {});
});
