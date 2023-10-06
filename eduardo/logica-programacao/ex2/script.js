var cidade = prompt("Digite o nome da sua cidade: ")
var valido = parseInt(prompt("Digite o número de votos válidos: "))
var branco = parseInt(prompt("Digite o número de votos brancos: "))
var nulo = parseInt(prompt("Digite o número de votos nulos: "))
var eleitor = valido + branco + nulo

var valido_per = parseFloat((valido * 100) / eleitor).toFixed(2)
var branco_per = parseFloat((branco * 100) / eleitor).toFixed(2)
var nulo_per = parseFloat((nulo * 100) / eleitor).toFixed(2)

alert("Na cidade " + cidade + "\nTeve " + valido + " votos válidos" + "\nTambém teve " + branco + " votos brancos \ne teve " + nulo + " votos nulos\n\nEssa eleição teve um total de " + eleitor + " eleitores" + 
"\n\nOs votos válidos foram " + valido_per + "% da eleição" + "\nOs votos brancos foram " + branco_per + "% da eleição" + "\nOs votos nulos foram " + nulo_per + "% da eleição")