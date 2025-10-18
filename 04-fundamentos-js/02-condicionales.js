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
// let numberEdad = +(edad);
// console.log(numberEdad);
// console.log(typeof numberEdad);

if(numberEdad > 30) {
  console.log("Estoy seguro que te duele algo");
} else {
  console.log("Que suerte :D");
}

let nota = Number(prompt("Ingrese la nota númerica"));

if(nota >= 18) {
  console.log("A+");
} else if (nota >= 16) {
  console.log("A");
} else if(nota >= 13) {
  console.log("B");
} else {
  console.log("C");
}

let rol = prompt("Ingrese el tipo de usuario admin, supervisor, usuario");

//Operador Ó OR, al menos un valor tiene que ser true
if(rol == "admin" || rol == "supervisor") {
  console.log("Puede acceder a reportes");
} else if(rol == "usuario") {
  console.log("Puede acceder a sus propios datos");
} else {
  console.log("Rol incorrecto, verificar por favor");
}
