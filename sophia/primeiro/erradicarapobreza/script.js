function menu() {
    const menu = document.querySelector(".menuMobile");

    if (menu.style.display === "none") {
        menu.style.cssText =
        `    
        z-index: 90;
        background-color: rgb(106, 199, 199);
        position: fixed;
        width: 100vw;
        `
    } else {
        menu.style.display = 'none';
    }

}
