document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f2f2f2';
        });

        paragraph.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent';
        });
    });
});
