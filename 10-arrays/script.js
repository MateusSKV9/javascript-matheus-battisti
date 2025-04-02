var arr = [5, "Mateus", { nome: "Lu", idade: 20 }, null];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr = [10];
console.log(arr[0]);

arr = [5, 4, 3, 2, 1, 1, 0];
console.log(arr);

arr.sort();
console.log(arr);

var arrDoubled = arr.map((item) => item * 2);
console.log(arrDoubled);

console.log(arr.join(" - "));

console.log(arr.reverse().join(" - "));

arr[1] = 99;
console.log(arr);

console.log(arr.length);

arr[8] = 200;
console.log(arr);


