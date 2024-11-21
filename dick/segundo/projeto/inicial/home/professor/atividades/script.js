const popups = [
    {
        id: "popup1",
        title: "Preencha as lacunas",
        content: "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9rlKdRZPBQjp2ALB6i5A7QM3i8RZyEY1kw&s>",
        titleColor: "#E04F3F",
        textColor: "#fff",
        backgroundColor: "#222",
        closeColor: "#FFF",
        fontSizeMultiplier: 0.9,
    },
    {
        id: "popup2",
        title: "Raízes Negativas",
        content: '<p style="color: white">Por volta do séc.XVI os matemáticos resolveram o problema da raiz de um número negativo, associando a raiz de √−1 a um número imaginário, representado pela letra i.Dessa forma, as raízes de numerais negativos poderiam ser calculadas com a associação do número imaginário e a raiz quadrada do número inteiro.</p>',
        titleColor: "#E04F3F",
        textColor: "#FFF",
        backgroundColor: "#222",
        closeColor: "#fff",
        fontSizeMultiplier: 0.9,
    },

    {
        id: "popup3",
        title: "Como Usar Os Pontos",
        content: '<p style="color: white">Os sinais de pontuação são um conjunto de sinais gráficos que indicam, em uma construção sintática, o maior ou menor grau de coesão entre estruturas e, em alguns casos, podem manifestar aspectos prosódicos (da fala) em um enunciado escrito.<p>',
        titleColor: "#E04F3F",
        textColor: "fff",
        backgroundColor: "#222",
        closeColor: "#fff",
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

