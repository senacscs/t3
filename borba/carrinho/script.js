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

document.addEventListener("DOMContentLoaded", function(event) {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(function(img) {
            img.classList.remove("active");
        });

        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Altera a imagem a cada 3 segundos
});

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });