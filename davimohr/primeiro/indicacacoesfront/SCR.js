const greetingMessage = () => {
	let h = new Date().getHours();
	if (h <= 5) return 'Boa madrugada meu dev';
	if (h < 12) return 'Boa dia meu dev';
	if (h < 18) return 'Boa tarde meu dev';
	return 'Boa noite';
	}
	alert(greetingMessage());




