document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-header a');
    const sections = document.querySelectorAll('section');
  
    function changeLinkState() {
      let index = sections.length;
  
      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    window.addEventListener('scroll', changeLinkState);
    changeLinkState();
  
    navLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
  });
  