window.addEventListener('scroll', function() {
    let menu = document.getElementById('menu'); 
    let headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    if (window.scrollY >= headerHeight) {
      menu.style.position = 'fixed';
      menu.style.top = '0';
    } else {
      menu.style.position = 'absolute';
      menu.style.top = 'auto';
    }
  });


//Tutorial
let modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


