var age = 20;

//!Puede ser redeclarada!!!
var age = 30;

for(var i = 0; i < 4; i++){
  console.log(i);
}
//!No respeta bloques de código correctamente, no se deberia poder usar aqui el i
console.log("afuera del for: ", i);

console.log(age);
//NO USAR VAR BAJO NINGÚN CONCEPTO, usar let ó const

//const no permite cambiar de valor directamente
const IGV = 1.18;

// IGV = 1.15;
const frutas = ["Kiwi", "Naranja", "Mango"];

//no permite reasignar un valor directamente
// frutas = ["Piña", "Manzana", "Chirimoya"];

//Pero si hay un método que ya tengo el objeto que permita modificarlo es válido, si funcionará
frutas.push("Aguaymanto");

console.log(frutas);
