var nome = "Ped";

if (nome == "Mateus") {
	showName(nome);
} else if (nome == "Pedro") {
	showName(nome);
} else {
	showName("Desconhecido");
}

var idade = 21;

if (idade > 20) {
	console.log("Ele pode entrar na festa!");
} else if (idade >= 18) {
	console.log("Ele só pode entrar com autorização");
}

var nome2 = "Jubileu2";

if (nome2 == "Jubileu1") {
	console.log("Jubileu1");
} else {
	console.log("Jubileu2");
} 

function showName(nome) {
	return console.log(`O nome dele é ${nome}`);
}
