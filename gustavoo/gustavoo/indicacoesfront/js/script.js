const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return "Boa madrugas";
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  }
  
  alert(greetingMessage());
  