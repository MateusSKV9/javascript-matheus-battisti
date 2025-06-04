var fruitList = ["Maçã", "Pera", "Mamão", "Melancia", "Laranja"];

const ul = document.createElement("ul");
fruitList.forEach((fruit) => {
	const li = document.createElement("li");
	li.textContent = fruit;

	ul.appendChild(li);
	document.body.appendChild(ul);
});

const p1 = document.createElement("p");
p1.textContent = "Clique aqui para ";
const a1 = document.createElement("a");
a1.href = "#";
a1.textContent = "acessar o site";
p1.appendChild(a1);
p1.textContent += " e aproveite!";

const p2 = document.createElement("p");
p2.appendChild(document.createTextNode("Clique aqui para "));
const a2 = document.createElement("a");
a2.href = "#";
a2.appendChild(document.createTextNode("acessar o site"));
p2.appendChild(a2);
p2.appendChild(document.createTextNode(" e aproveite"));

document.body.appendChild(p1);
document.body.appendChild(p2);
