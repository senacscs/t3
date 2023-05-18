 alert("Bem vindo ao meu site");
 console.log("web dos links	");
 const greetingMessage =() => {
	let h = new Date(). getHours();
	console.log(h);
	if (h <= 5) return 'Boa madrugada';
	if (h < 12) return 'Bom dia';
	if (h < 18) return 'Boa tarde';
	return 'Boa tarde';
}
 document.getElementById("demo").innerHTML = (greetingMessage());
