//Que diferencia hay entre una expresión vs una sentencia
// console.log(10 > 50);
//va a servir para evaluar una expresión, si esa expresión es verdadera o falsa
if (10 > 50) {
  //si es verdadero
  console.log("es verdadero!!!");
} else {
  console.log("es falsooooo");
}

let edad = prompt("Cúal es tu edad");
// console.log(edad);
// console.log(typeof edad);
let numberEdad = Number(edad);
// console.log(numberEdad);
// console.log(typeof numberEdad);

if(numberEdad > 30) {
  console.log("Estoy seguro que te duele algo");
} else {
  console.log("Que suerte :D");
}
