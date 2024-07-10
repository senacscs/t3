document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider input");
    const totalSlides = slides.length;

    setInterval(function() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].checked = true;
    }, 3000); // Change slide every 3 seconds
});
