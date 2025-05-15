let x = 0;

const body = document.querySelector("body");
const divFlex = document.createElement("div");
divFlex.classList.add("flex-row-10");

while (x < 5) {
	x++;
	try {
		const p = document.createElement("p");
		p.textContent = `${x} - Mateus;`;
		p.style.color = "blue";
		divFlex.appendChild(p);

		x == 5 ? body.appendChild(divFlex) : "";
	} catch (error) {
		document.write(`${error}`);
	}
}

let nameList = ["Mateus", "Santos", "-", 29, "anos"];

let h5 = document.createElement("h3");
h5.textContent = nameList.join(' ');
body.appendChild(h5);
