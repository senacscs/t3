function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/mmmmenu_white_36pd.svg"; 
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/mmmmenu_white_36pd.svg";
    }
}