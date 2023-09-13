const view = document.getElementById('view')

view.addEventListener("click", () => {
    let audio = new Audio('sound.mp3')
    audio.play()
})


function randomPosY() {
    let max = view.offsetHeight
    let min = 5
    let y = Math.random() * (max - min) + min;
    return y
}

function randomPosX() {
    let max = view.offsetWidth
    let min = 5
    let x = Math.random() * (max - min) + min;
    return x
}

function createEnemy() {
    let img = document.createElement('img')
    // img.src = './hitler.webp'
    img.src = './bug.png'
    img.style.left = randomPosX() + 'px'
    img.style.top = randomPosY() + 'px'
    img.classList.add('enemy')


    view.appendChild(img)
    img.addEventListener("click", () => {
        img.remove()
        counter++;
        let suicide = Math.floor((Math.random() + 1) * 6)
        console.log(suicide)
        if (suicide === 6) {
            alert('VOCÊ MORREU')
        }
        let audio = new Audio('sound.mp3')
        audio.play()
        counterdiv.innerHTML = counter;
    })
}
const enemies = document.querySelectorAll('.enemy')
const counterdiv = document.getElementById('counter')
let counter = 0

function createEnemyWithInterval(time) {
    
    let delay = time

    if (delay > 2000) {
        delay = time - (counter * 100)
    }
    console.log(delay)

    setTimeout(() => {
        requestAnimationFrame(() => {
            createEnemyWithInterval(delay)
            createEnemy()
        })
    }, time)
    
}

createEnemyWithInterval(4000)



