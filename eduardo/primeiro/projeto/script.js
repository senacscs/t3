function formPopUp(){

    const popup = document.getElementById("form")
    const closeButton = document.getElementById("close-form")

        popup.showModal()
    
    closeButton.onclick = function() {
        popup.close()
    }

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})