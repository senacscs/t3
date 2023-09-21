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

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}