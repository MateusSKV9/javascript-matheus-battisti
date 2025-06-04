function hayHello() {
	console.log("Olá, Mundo!");
}

function sum(a, b) {
	return a + b;
}

function fatorial(n) {
	var total = 1;
	for (var i = 1; i <= n; i++) {
		total *= i;
	}

	return total;
}

hayHello();

var result = sum(33, 22);
console.log(result);

console.log(fatorial(6));
