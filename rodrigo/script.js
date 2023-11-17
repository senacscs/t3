let sites = []
let lines

fetch('./sites.json')
    .then((response) => response.json())
    .then((json) => {
        sites = json;
        fetchData(sites);
    })
    .catch((error) => {
        console.error('Erro ao buscar dados:', error);
    });

async function fetchData(sites) {
    try {
        createLinks(sites);
        select();
        lines = document.querySelectorAll('tr')

if (mobile) {
    lines.forEach((line) => {
        line.addEventListener('click', () => {
            console.log('click');
            const clickedLine = line.id;
            selected = line.id
            dataOpen();
        });
    });
}

        console.log('fetch');
    } catch (error) {
        console.error('Erro ao processar dados:', error);
    }
}

const infos = document.getElementById('data')
const table = document.querySelector('table')
const y = document.getElementById('y');
const n = document.getElementById('n');
const e = document.getElementById('enter');
const a = document.getElementById('arrow');

let key; // keyCode
let screen = 0



document.addEventListener('keydown', function (event) {
    key = event.key;
    if (key == 'y') {
        y.setAttribute('src', 'assets/teclas/yP.png');

        if(screen == 1){

            window.location.href = sites[selected].link
        }
    } else if (key == 'n') {
        n.setAttribute('src', 'assets/teclas/nP.png');

        if(screen == 1) {
            table.style.display = ''
            infos.style.display = 'none'

            screen = 0
            select()
        }
    } else if (key == 'Enter') {
        e.setAttribute('src', 'assets/teclas/eP.png');
        if(screen == 0) {
            dataOpen()
        }
    } else if (key == 'ArrowUp') {
        a.setAttribute('src', 'assets/teclas/up.png');
        if(screen == 0){
            if (selected > 0) {
                selected--;
                select();
            } else {
                selected = number - 1;
                select();
            }
        }
    } else if (key == 'ArrowDown') {
        a.setAttribute('src', 'assets/teclas/down.png');
        if(screen == 0){
            if (selected === number - 1) {
                selected = 0;
                select();
            } else {
                selected++;
                select();
            }
        }
    }
});

let selected = 0;
let number = 0;
let lastSelected;

function select() {
    if (lastSelected == null) {
        const tr = document.getElementById(selected.toString());
        tr.style.border = '4px solid rgb(83, 198, 7)';

        if(selected >= 5) {       
        const view = selected - 5
        document.getElementById(view.toString()).scrollIntoView();
        lastSelected = selected;
        }else {
            document.getElementById('params').scrollIntoView()
        }

        lastSelected = selected;
    } else {
        const lTr = document.getElementById(lastSelected.toString());
        lTr.style.border = '1px solid rgb(83, 198, 7)';

        const tr = document.getElementById(selected.toString());
        tr.style.border = '4px solid rgb(83, 198, 7)';

        if(selected >= 5) {       
        const view = selected - 5
        document.getElementById(view.toString()).scrollIntoView();
        lastSelected = selected;
        }else {
            document.getElementById('params').scrollIntoView()
        }

        lastSelected = selected;
    }
}



document.addEventListener('keyup', function(event){
    key = event.key;

    if(key == 'y') {
        y.setAttribute('src', 'assets/teclas/y.png'); 
    }else if(key == 'n') {
        n.setAttribute('src', 'assets/teclas/n.png')
    }else if(key == 'Enter') {
        e.setAttribute('src', 'assets/teclas/e.png')
    }else if(key == 'ArrowUp' || key == 'ArrowDown') {
        a.setAttribute('src', 'assets/teclas/a.png')
    }
});



function createLinks(sites) {
    sites.forEach(site => {
        const tr = document.createElement('tr')
        const name = document.createElement('th')
        const data = document.createElement('th')
        const course = document.createElement('th')

        name.innerHTML = site.title
        data.innerHTML = site.date
        tr.id = number
        tr.dataset.title = site.title
        course.innerHTML = site.subject

        tr.appendChild(name)
        if(mobile === false) {
            tr.appendChild(data)
        }
        tr.appendChild(course)
        table.appendChild(tr)
        number++
    });
}
function dataOpen() {
    screen = 1
    table.style.display = 'none'
    infos.style.display = 'contents'

    const title = document.getElementById('title')
    const subject = document.getElementById('subject')
    const date = document.getElementById('date')
    const text = document.getElementById('text')
    const site = sites[selected]

    title.innerHTML = site.title
    subject.innerHTML = site.subject
    date.innerHTML = site.date
    text.innerHTML = site.text
}

const inputElement = document.querySelector("input")


inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase()

    if(inputed == 'in the end'){
        const video = document.querySelector('video')

        table.style.display = 'none'
        infos.style.display = 'none'
        video.style.display = 'block'
        video.play()
    }

    lines.forEach((tr) => {
        let text = tr.dataset.title.toLowerCase(); 

        if (text.includes(inputed)||text.includes('paramentro33')) {
            tr.style.display = "table-row";
        } else {
            tr.style.display = "none";
        }
    });
});
let mobile = false

  window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('Dispositivo Movel');
        mobile = true
        
    }
}
if(mobile = false){
    document.addEventListener("wheel", function(event) {
        event.preventDefault();
      }, { passive: false });
}
function mobileLink(number) {
    if(mobile) {
        if(number == 1) {
            window.location.href = sites[selected].link
        }else {
            table.style.display = ''
            infos.style.display = 'none'

            screen = 0
            select()
        }
    }
}
fetchData()
