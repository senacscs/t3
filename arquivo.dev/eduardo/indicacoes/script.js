const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return 'Boa Madrugada, Bem Vindo ao meu Site!';
    if (h < 12) return 'Bom Dia, Bem Vindo ao meu Site!';
    if (h < 18) return 'Boa Tarde, Bem Vindo ao meu Site!';
    return 'Boa Noite, Bem Vindo ao meu Site!';
    }
alert(greetingMessage());