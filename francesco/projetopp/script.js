const a = document.querySelectorAll('.a')
const div = document.querySelectorAll('div')

a.forEach((a) => {
    a.addEventListener('click', () => {
        const aNum = a.dataset.number
        div.forEach((div) => {
            const divNum = div.dataset.number
        
        if (aNum == divNum) {
            div.classList.add('show')
            div.classList.remove('hidden')
        } else {
            div.classList.add('hidden')
            div.classList.remove('show')
        }
        })
    })
})