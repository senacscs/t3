const greentingMessage=() => {
	let h = new Date().getHours();
	if (h <= 5) return 'Bom madrugada';
	if (h < 12) return 'Bom dia';
	if (h< 18) return 'Boa tarde';
	return 'Bom noite';
}	
alert(greetingMessage())
//salvar como script.js
//<script src=script.js><\script>

document.getElementById("demo").innerHTML = "Hello JavaScript!"

document.getElementById("demo").innerHTML = "Hello JavaScript!";
