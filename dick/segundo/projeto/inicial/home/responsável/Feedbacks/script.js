const popups = [
    {
        id: "popup1",
        title: "Feedback semana 4 a 8/11 ",
        content:
            "",
        sideMargin: "10px",
        titleColor: "#E04F3F",
        textColor: "#fff",
        backgroundColor: "#222",
        closeColor: "#FFF",
        fontSizeMultiplier: 0.9,
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