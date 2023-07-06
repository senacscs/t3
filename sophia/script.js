const greetingMessage = () => {
let h = new Date().getHours();
if (h <= 5) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo disponível neste site!! Ninguém mandou nascer feia desse jeito;';
if (h < 12) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo disponível neste site!! Ninguém mandou nascer feia desse jeito;';
if (h < 18) return 'ALERTA DE GATILHO:  Não me responsabilizo pelas feias que se magoarem com o conteúdo disponível neste site!! Ninguém mandou nascer feia desse jeito;';
}
alert(greetingMessage());

let audio = new Audio('./midia/audio.mp3')

document.onload(audio.play())
