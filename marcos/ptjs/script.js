const output = document.getElementById('output')

function clearOutput() {
    let child = document.querySelector('#output p')

    if (child) {
        output.removeChild(child)
    }   
}

function calcularTempo() {
    let data = document.getElementById('birth-date').value
    let dataNascimento = new Date(data);
  
    if (isNaN(dataNascimento)) {
      clearOutput()
      output.innerHTML = '<p>Data Inválida</p>'
      return;
    }
  
    let dataAtual = new Date();
  
    let diferenca = dataAtual - dataNascimento;
  
    let anos = Math.floor(diferenca / (365 * 24 * 60 * 60 * 1000));
    let meses = Math.floor((diferenca % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    let dias = Math.floor((diferenca % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    let horas = Math.floor((diferenca % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  
    // Exibe os resultados
    clearOutput()
    output.innerHTML = `<p>Tempo passado desde ${data}:<br>Anos: ${anos}<br>Mêses: ${meses}<br>Dias: ${dias}<br>Horas: ${horas}</p>`
  }
  

function contarVogais() {
    let text = document.getElementById('vogais').value
    text = text.toLowerCase();
    const vogais = "aeiou";
    let count = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (vogais.includes(text[i])) {
        count++;
      }
    }


    clearOutput()
    output.innerHTML = `<p>Quantidade de vogais no texto ${text}: <br> ${count}</p>`
    return count;
  }

function fatorial() {
    
    let numero, atual = 1, fatorial = 1;
    
    numero = parseInt(document.getElementById('fatorial').value);
    
    const twoDigitPlus = /\d{3,}/.test(numero);

    if (twoDigitPlus) {
        clearOutput();
        output.innerHTML = `<p>Número Muito Grande. Máximo de dois Dígitos.</p>`
        return
    } 

    while (atual <= numero) {
      fatorial = fatorial * atual; //ja
      atual = atual + 1;
    }
    clearOutput();
    output.innerHTML = `<p>${fatorial}</p>`
}

function potencia() {
    let base = document.getElementById('p-base').value
    let expoente = document.getElementById('expoente').value
    let result = Math.pow(base, expoente)

    clearOutput();
    output.innerHTML = `<p>${result}</p>`
}

function raiz() {
    let number = document.getElementById('sqrt').value
    let result = Math.sqrt(number)

    clearOutput();
    output.innerHTML = `${result}`
}


  