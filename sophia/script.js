const greetingMessage = () => {
let h = new Date().getHours();
if (h <= 5) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo presente neste site';
if (h < 12) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo presente neste site';
if (h < 18) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo presente neste site';
}
alert(greetingMessage());

let audio = new Audio('./midia/audio.mp3')

document.onload(audio.play())
