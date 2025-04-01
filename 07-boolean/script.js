var verdadeiro = true;

console.log(verdadeiro);
console.log(typeof verdadeiro);

console.log(typeof true);
console.log(typeof false);

var valor = "";

console.log(!!"");
console.log(!!"teste");
console.log(!0);
console.log(!1);
console.log(!null);
console.log(!!null);
console.log(!undefined);
console.log(!!undefined);
console.log(!![]);
console.log(!{});
console.log(!!{});

var nome = "a".trim();

if (!!nome) {
  console.log(`Nome: ${nome}`);
} else {
	console.log("Nome vazio");
}
