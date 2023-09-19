const form = document.getElementById('form')
form.addEventListener('submit', e => e.preventDefault()) 
form.addEventListener('reset', e => e.preventDefault()) 
let score = 0
const answords = [
    12,
    23,
    33,
    43
]




function testForm() {
    if(form.checkValidity() == true){
        answords.forEach((answord) => {
            const q = parseInt(answord.toString()[0]);
            const sl = document.querySelector(`input[name=q${q}]:checked`).value
            const lr = "l" + answord
            const lw = "l" + sl

        if(sl == answord) {
            score++
            document.getElementById(lr).style.backgroundColor = "rgba(3, 201, 3, 0.705)"
        }else {
            document.getElementById(lw).style.backgroundColor = "rgba(255, 0, 0, 0.562)"
            document.getElementById(lr).style.backgroundColor = "rgba(3, 201, 3, 0.705)"
        }
        })
        const scoreText = document.getElementById('score')
        
        if(score > 2) {
            scoreText.style.color = "green"
        }else if(score = 3){
            scoreText.style.color = "yellow"
        }else {
            scoreText.style.color = 'red'
        }
        scoreText.style.backgroundColor = 'white'
        document.getElementById('span').innerHTML = score
        complete = true
        document.getElementById('button').disabled = true
    }
}
