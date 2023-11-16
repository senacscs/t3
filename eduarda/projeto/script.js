var iconMenu = document.querySelector('.icon-menu'),
    menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu-link.sub');

iconMenu.addEventListener('click', openMenu);

menuLink.forEach(function(el) {
  el.addEventListener('click', openSubmenu);
});

function openMenu() {
  
  if(menu.classList.contains('open')) {
    menu.classList.add('close');
    iconMenu.classList.remove('icon-closed');
    
    setTimeout(function(){ menu.classList.remove('open'); }, 1300);
    
  } else {
    menu.classList.remove('close');
    menu.classList.add('open');
    iconMenu.classList.add('icon-closed');
  } 
}

function openSubmenu(event) {
  
if (event.currentTarget.classList.contains("active")) {
    event.currentTarget.classList.remove("active");
  } else {
    event.currentTarget.classList.add("active");
  }
}