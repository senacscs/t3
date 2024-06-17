document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links');
    const learnMoreBtn = document.querySelector('.link-action');
 
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hover');
        });
 
        link.addEventListener('mouseout', () => {
            link.classList.remove('hover');
        });
 
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 
    learnMoreBtn.addEventListener('mouseover', () => {
        learnMoreBtn.classList.add('hover');
    });
 
    learnMoreBtn.addEventListener('mouseout', () => {
        learnMoreBtn.classList.remove('hover');
    });
 
    const logo = document.querySelector('.img-logo');
    logo.style.opacity = 0;
    setTimeout(() => {
        logo.style.transition = 'opacity 1.5s';
        logo.style.opacity = 1;
    }, 100);
});