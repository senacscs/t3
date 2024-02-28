const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
    const topoPagJanela=window.pageYOffset+((window.innerHeight*3)/4);
    elementos.forEach(function(elemento){
        if(topoPagJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    });
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})