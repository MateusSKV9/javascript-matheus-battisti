var estudante = {
	nome: "Mateus",
	idade: 20,
	profissao: "Desenvolvedor Web",
};

console.table(estudante);

console.log(`Olá, meu nome é ${estudante.nome}, tenho ${estudante.idade} e sou um ${estudante.profissao}`);

var estudante2 = {
	nome: "Luiza",
	idade: 18,
	profissao: "Médica",
};

var { nome, idade, profissao } = estudante2;

console.log(`Olá, meu nome é ${nome}, tenho ${idade} e sou ${profissao}`);

let carro1 = {
	ano: 2000,
	cor: "Branco",
	fabricante: "Ford",
};

let carro2 = {
	ano: 2025,
	cor: "Vermelho",
	fabricante: "Fiat",
};

console.log("\n");

function descreverCarro({ ano, cor, fabricante }) {
	console.log(`Carro ${cor}, fabrincante ${fabricante}, ano ${ano}`);
}

descreverCarro(carro1);
descreverCarro(carro2);

var carros = [];
carros.push(carro1);
carros.push(carro2);

console.log("Foreach - carros: \n");

carros.forEach(({ ano, cor, fabricante }) => {
	console.log(`${ano} - ${cor} - ${fabricante}`);
});

let carros2025 = carros.filter((car) => car.ano === 2025);
console.log(`Carros 2025: `, carros2025);
