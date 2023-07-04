// ------------------------------------------------LIGAR
function inicio() {
    setTimeout(turnon, 5000)
    console.log('opening')
}
function turnon() {
    const inicio = document.getElementById('on')
    const body = document.getElementById('body')

    inicio.classList.add('hidden')
    inicio.classList.remove('on')
    body.classList.remove('hidden')
}

// ------------------------------------------------RELOGIO
function getHours() {
    const clock = document.getElementById('time')
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    clock.innerHTML = `${hour}:${minute}`
}
// ------------------------------------------------MENU
function menu() {
    const menu = document.getElementById('menuAll')

    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened')
        menu.classList.add('hidden')
    }
    else {
        menu.classList.remove('hidden')
        menu.classList.add('opened')
    }
}


// ------------------------------------------------SELECT APP INTERFACE
const Apps = [
    {
        title: "Lixeira",
        Subject: "Teste",
        Data: "00/00/00",
        Img: "wallpaper.jpg",
        Text: "Texto teste pra essa poha",
        Link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        Class: "template",
        Icon: "./assets/bin.png"
    },
    {
        title: "Indicações",
        Subject: "Técnico",
        Data: "24/04/2023",
        Img: "indicacoes.jpg",
        Text: "Considerando os conhecimentos já adquiridos em HTML, CSS e JS, utilizar os mesmos e aprofundar para criar uma webpage (página na internet) sobre osconteúdos básicos de Front-End, sendo esta a temática principal para as recomendações de:</p>1 site de conteúdos (deve ter o link pro site 1 canal Youtube de conteúdos (deve ter o link e 1 vídeo embedado)1 influenciador de conteúdos (deve ter o link e um material embedado)1 tutorial (deve ter o link e uma imagem do resultado do tutorial)1 podcast (link embedado de só áudio preferencialmente, mas pode ser vídeo)",
        Link: "./indicacoes",
        Class: "indicacoes",
        Icon: "./assets/indicacoesIcon.png"
    },
    {
        title: "Trabalho de PP",
        Subject: "Projeto Profissional",
        Data: "15/05/2023",
        Img: "PP.jpg",
        Text: "A poluição é um assunto muito em alta hoje em dia, pelo fato do alto nível de poluição no nosso planeta. Nós queremos ajudar a resolver. Por meio da conscientização das formas de limpeza e de poluição.",
        Link: "./PP",
        Class: "pp",
        Icon: "./assets/Favicon.svg"
    },
    {
        title: "Kat Generator",
        Subject: "Técnico",
        Data: "05/05/2023",
        Img: "kat.jpg",
        Text: "A partir do código exemplo em https://arquivo.dev/t1/oficina.html modificar o arquivo html, com temática livre, inserindo algum novo elemento nesta webpage(exemplo, um vídeo, um link, um javascript), e anexar este novo documento html personalizado aqui nesta tarefa.",
        Link: "./kat",
        Class: "kat",
        Icon: "./assets/katIcon.png"
    },
    {
        title: "Grid Tycoon",
        Subject: "Técnico",
        Data: "25/05/2023",
        Img: "geladeira.jpg",
        Text: "Super oficina foda sobre grid",
        Link: "./oficina2",
        Class: "oficina",
        Icon: "./assets/freezer.png"
    },
     {
        title: "Survival guide",
        Subject: "English",
        Data: "23/06/2023",
        Img: "survival.jpg",
        Text: "Made a website for explaining my survival guide for the apocalipse",
        Link: "./survival",
        Class: "survival",
        Icon: "./assets/manual.png"
    },
         {
        title: "Carrinho",
        Subject: "Física/Técnico",
        Data: "23/06/2023",
        Img: "carro.jpg",
        Text: "Site com o nosso carrinho de rolimã para o trabalho de física",
        Link: "https://senacscs.github.io/t3/tito/carrinho",
        Class: "carrinho",
        Icon: "./assets/carrinho.png"
    },
        {
        title: "ODS 6",
        Subject: "PP",
        Data: "04/07/2023",
        Img: "ods6.jpg",
        Text: "Site de PP para explicar a ODS 6 (Água e saneamento)",
        Link: "./ods",
        Class: "ods",
        Icon: "./ods/assets/ODS6.jpg"
    },
]

const h1 = document.getElementById('h1W')
const h2 = document.getElementById('h2')
const p = document.getElementById('p')
const imgH = document.getElementById('img')
const dataH = document.getElementById('data')
const subjectH = document.getElementById('subjectW')
const a = document.getElementById('link')
const titleW = document.getElementById('titleW')

const appsGrid = document.querySelector('.apps')


Apps.forEach((App) => {
    function getRandomInt() {
        return Math.floor(Math.random() * 4) + 1;
    }

    const appClass = App.Class
    const newApp = document.createElement("div")
    newApp.classList.add("oneApp", appClass)

    console.log('apps Created')

    const nameDiv = document.createElement('div')
    const nameDivText = document.createTextNode(App.title)
    nameDiv.appendChild(nameDivText)

    const imgElement = document.createElement('img')
    imgElement.src = App.Icon

    newApp.appendChild(imgElement)
    newApp.appendChild(nameDiv)

    newApp.style.gridRow = getRandomInt()
    document.getElementById('appsDiv').appendChild(newApp)

    const menuDiv = document.createElement('div')
    const menuSimg = document.createElement('div')
    const menuStext = document.createElement('div')
    const menuSubDiv = document.createElement('p')
    const menuTitleDiv = document.createElement('h3')
    const menuImg = document.createElement('img')
    const menuSub = document.createTextNode(App.Subject)
    const menuTitle = document.createTextNode(App.title)

    menuDiv.classList.add('site')
    menuSimg.classList.add('menuSimg')
    menuStext.classList.add('menuStext')
    menuImg.src = App.Icon
    menuTitleDiv.appendChild(menuTitle)
    menuSubDiv.appendChild(menuSub)
    menuStext.appendChild(menuTitleDiv)
    menuStext.appendChild(menuSubDiv)
    menuSimg.appendChild(menuImg)
    menuDiv.appendChild(menuSimg)
    menuDiv.appendChild(menuStext)

    document.getElementById('right').appendChild(menuDiv)

    const url = App.Link

    function openLink() {
        const win = window.open(url, '_blank')
        win.focus()
    }
    menuDiv.addEventListener("click", () => {
        openLink()
    })

    const IconApps = document.querySelectorAll('.oneApp')

        newApp.addEventListener("click", () => {
                const title = App.title;
                const subject = App.Subject;
                const Data = App.Data;
                const Img = App.Img;
                const text = App.Text;
                const link = App.Link;

                h1.innerHTML = title;
                dataH.innerHTML = Data;
                subjectH.innerHTML = subject;
                imgH.src = `./assets/${Img}`
                p.innerHTML = text;
                a.href = link;
                titleW.innerHTML = title


        });

    function isMobile() {
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i) != -1) {
            return true;
        }
        return false;
        }
    
    IconApps.forEach((IconApp) => {
        IconApp.addEventListener("click", () => {
            if (isMobile == true) {
                janela.classList.remove('hidden')
                janela.classList.add('window')
                console.log('OpenMobile')
            }
            else {
                IconApp.addEventListener("dblclick", () => {
                    janela.classList.remove('hidden')
                    janela.classList.add('window')
                });
            }
        })

    });
})


const selectedApps = document.querySelectorAll('.oneApp')

document.addEventListener('mouseup', function (e) {
    const bar = document.getElementById('taskbar');
    const menu = document.getElementById('menuAll')
    selectedApps.forEach((elmnt) => {
        elmnt.classList.remove('click')
    });
    if (!bar.contains(e.target)) {
        menu.classList.add('hidden');
        menu.classList.remove('opened')
    }
});



selectedApps.forEach((selectedApp) => {
    selectedApp.addEventListener("click", () => {
        selectedApps.forEach((elmnt) => {
            elmnt.classList.remove('click')
        });
        selectedApp.classList.add('click')
    })
})

const janela = document.getElementById('janela')



setInterval(() => {
    getHours()
}, 10000)

function close() {
    console.log('close')
    janela.classList.remove('window')
    janela.classList.add('hidden')
}
document.getElementById('sofrimento').addEventListener('click', close)

function nicolau() {
    const audio = document.getElementById('nicolau')

    audio.play()
    setTimeout(nicolauImg(), 3000)
}
function nicolauImg() {
    const nicolau = document.getElementById('nicolauDiv')

    nicolau.classList.remove('hidden')
    nicolau.classList.add('windowMeme')
    setTimeout(() => {
        nicolau.classList.remove('windowMeme')
        nicolau.classList.add('hidden')
    }, 5000)
}

inicio()
