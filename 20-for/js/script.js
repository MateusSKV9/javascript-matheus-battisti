for (var i = 0; i < 10; i++) {
	document.write(`<h3>${i}</h3>`);
}

document.write("<hr>");

var estudents = [
	{ name: "Mateus", age: 21, course: "Sistemas de Informação" },
	{ name: "Luz", age: 19, course: "Medicina" },
	{ name: "Malu", age: 20 },
];

estudents.forEach((estudent) => descreverEstudent(estudent));

function descreverEstudent({ name: nome, age: idade, course: curso = "Não informado" }) {
	document.write(`${nome} - ${idade} - ${curso}`);
	document.write("<br>");
}
