function mostrarMensagem() {
    // Rola suavemente até a seção de tecnologias
    document.getElementById('tecnologias').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    console.log("Usuário iniciou a leitura.");
}