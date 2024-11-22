const popups = [
    {
        id: "popup1",
        title: "Feedback semana 4 a 8/11 ",
        content:
            "<p style=\"text-align: justify\"> Durante a semana a estudante fez questionamentos sobre sua inteligência 4 vezes, demonstrando frustração por não entender um conteúdo que deveria ser 'fácil'.",
        sideMargin: "10px",
        titleColor: "#E04F3F",
        textColor: "#fff",
        backgroundColor: "#222",
        closeColor: "#FFF",
        fontSizeMultiplier: 0.88,
    },
]

function showPopup(popupId) {
    if (!popupId) {
        return
    }
    const popupContent = popups.filter(popup => popup.id === popupId)

    const popupComponent = new Popup(popupContent[0])

    popupComponent.show()
}