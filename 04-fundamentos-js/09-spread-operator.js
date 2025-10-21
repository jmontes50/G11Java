let pokemon1 = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: 100,
  vida: 60
}

//copia por referencia, con objetos, PERO NO PASA CON PRIMITIVOS
let pokemon2 = pokemon1;

//pokemon2 a pelear
pokemon2.vida = 35;

console.table(pokemon2);

console.log("---------");

console.table(pokemon1);

//-------------------------
//con primitivos lo que sucede es una copia por valor
let edad = 25;

let copiaEdad = edad;

console.log(edad);

copiaEdad = copiaEdad + 10;

console.log("edad Original", edad);
console.log("copia Edad", copiaEdad);

//---------comparando objetos
let gato1 = {
  nombre: "Abby"
}

let gato2 = {
  nombre: "Abby"
}

console.log(gato1 === gato2);

//spread operator, sirve para hacer una copia por valor de un objeto
let gato3 = { ...gato1 };

gato3.nombre = "Mandy";

console.log(gato3);

let gato4 = { ...gato1, color: "Negro" }

console.log(gato4)

console.log("gato 1",gato1);
