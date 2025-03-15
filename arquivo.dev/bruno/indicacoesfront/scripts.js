const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return 'Boa madrugada Programadores';
    if (h < 12) return 'Bom dia Programadores';
    if (h < 18) return 'Boa tarde Programadores';
    return 'Boa noite Programadores';
    }
    alert(greetingMessage());
