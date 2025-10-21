/**
 * No necesito definir el tipo, ni la cantidad, la asignación es =
 */

let numeros = [10, 20, 30, 40];

console.log(numeros);

console.log(numeros[1]);

numeros[3] = 100;

console.log(numeros);

let cosas = ["Textooo", 10000, true, undefined, "HI", [7,8,9]];

console.log(cosas);

numeros.push(200); //agrega al final

console.log(numeros);

numeros.unshift(1); //agrega al inicio

console.log(numeros);

numeros.pop(); //remover del final 01 item

console.log(numeros);

numeros.shift(); //remover del inicio 01 item

console.table(numeros); //console muy util con arrays

console.log("longitud:", numeros.length);
console.log(typeof numeros.length)

for(let i = 0; i < numeros.length; i++){
  console.log(i);
}

let frutas = ["Kiwi", "Piña", "Naranja", "Coco"];

for(let fruta of frutas) {
  console.log(fruta);
}
