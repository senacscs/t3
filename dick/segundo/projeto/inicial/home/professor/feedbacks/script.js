const popups = [
    {
        id: "popup1",
        title: "Feedback semana 4 a 8/11 ",
        content:
            "<p style=\"text-align: justify\">  Durante a semana a estudante fez 8 questionamentos sobre o sistema respiratório, sendo 5 desses sobre o funcionamento geral dos pulmões.<br>  A estudante também demonstrou interesse sobre o assunto de raízes complexas, pesquisando sobre o tópico 6 vezes.</p>",
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