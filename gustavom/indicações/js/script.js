const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return "Bem vindo!";
    if (h < 12) return "Bem vindo!";
    if (h < 18) return "Bem vindo!";
    return "Bem vindo!";
  }
  
  alert(greetingMessage());