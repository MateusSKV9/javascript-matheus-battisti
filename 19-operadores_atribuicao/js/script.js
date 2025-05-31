var x = 1,
	y = 2;

document.write((x = x + y));
document.write("<br>");

document.write((x += y));
document.write("<br>");

document.write((x -= y));
document.write("<br>");

document.write((x *= y));
document.write("<br>");

document.write((x /= y));
document.write("<br>");

document.write(x++);
document.write("<br>");

document.write(x--);
document.write("<br>");
document.write("<br>");

while (x <= 10) {
	document.write(x);
	document.write("<br>");
	x++;
}
