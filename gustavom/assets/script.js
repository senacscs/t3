let sites = []
let lines

async function fetchData () {
    try{
        const response = await fetch('./assets/sites.json')
        fetch("./assets/sites.json")
        .then((response) => response.json())
        .then((json) => {
            sites = json
        })
        .catch((error) =>{
            console.error('Erro ao buscar dados',error);
        });
        const json = await response.json()
        sites = json;
        createSites()
        lines = document.querySelectorAll('.card')
        lines.forEach((line) => {
            line.addEventListener('click', () =>{
                window.location.href = line.dataset.link
            })
        })
        console.log(sites)   
    } catch (err) {
        console.log(err)
    }
    
}
fetchData()

const container = document.getElementById('json')

function createSites() {
    sites.forEach((site) => {
        const card = document.createElement('div');
        const flex = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerHTML = site.name
        const p = document.createElement('p');
        p.innerHTML = site.desc
        const date = document.createElement('p');
        date.innerHTML = site.date

        card.classList.add('card');
        flex.classList.add('flex');
        card.dataset.link = site.link

        flex.appendChild(h2);
        flex.appendChild(date);

        card.appendChild(flex);
        card.appendChild(p);

        container.appendChild(card)
    })
}