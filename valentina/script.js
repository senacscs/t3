const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return 'hello';
    if (h < 12) return 'hello';
    if (h < 18) return 'hello';
    }
    alert(greetingMessage());