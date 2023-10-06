var dinheiro = parseFloat(prompt("Digite um valor: "))
var dolar = (dinheiro / 5.13).toFixed(2)
var euro = (dinheiro / 5.40).toFixed(2)
var libras = (dinheiro / 6.24).toFixed(2)

alert("Com R$" + dinheiro + "\nVocê pode comprar " + dolar + " dólares" + "\nVocê pode comprar " + euro + " euros" + "\nVocê pode comprar " + libras + " libras.")
