function formPopUp(){

    const popup = document.getElementById("form")
    const closeButton = document.getElementById("close-form")

        popup.showModal()
    
    closeButton.onclick = function() {
        popup.close()
    }

}