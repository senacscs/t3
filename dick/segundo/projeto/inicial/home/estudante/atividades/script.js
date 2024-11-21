const popups = [
    {
        id: "form1",
        title: "Sistema Respiratório",
        content:
            "O sistema respiratório realiza a troca de gases por meio da ventilação pulmonar e da troca gasosa nos alvéolos. A ventilação pulmonar envolve o movimento de entrada e saída de ar dos pulmões: ao inspirarmos, o ar passa pelas vias aéreas (nariz, faringe, laringe, traqueia e brônquios), chegando até os alvéolos nos pulmões. Nos alvéolos, ocorre a troca gasosa, onde o oxigênio do ar inspirado passa para o sangue, enquanto o dióxido de carbono do sangue é eliminado para o ar que será expirado, mantendo o equilíbrio necessário para a respiração celular.",
        sideMargin: "10px",
        titleColor: "#E04F3F",
        textColor: "#fff",
        backgroundColor: "#222",
        closeColor: "#FFF",
        fontSizeMultiplier: 0.9,
    },
    {
        id: "form2",
        title: "Importância dos Pulmões",
        content:
            "Os pulmões são os principais órgãos do sistema respiratório e possuem uma estrutura complexa para maximizar a troca de gases. Cada pulmão contém milhões de alvéolos, aumentando significativamente a área de superfície disponível para a troca gasosa. Essa estrutura permite que o oxigênio entre rapidamente na corrente sanguínea e seja distribuído pelo corpo, enquanto o dióxido de carbono é removido de maneira eficiente.",
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


