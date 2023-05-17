const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('div-anime');
            return;
        }
        else {
            entry.target.classList.remove('div-anime')
        }
        
    })
})

const divElements = document.querySelectorAll('.div')
divElements.forEach(divElements => {
    observer.observe(divElements);
})

