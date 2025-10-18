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
//Number busca convertir el parámetro recibido a un número
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

//IMPORTANTE
let creditos = prompt("De cuantos créditos dispones?");

console.log(creditos)

//el == va a evaluar SOLO el valor
//el === va a evaluar el valor Y el tipo de dato
if(creditos === 100) {
  console.log("tienes el número de créditos correcto");
} else {
  console.log("NO tienes el número de créditos");
}

//falsy,recordemos que ! niega
// if(!undefined) {
// if(!0) {
// if(!"") {
// if(!null) {
if(!("patatas"/100)) {
  console.log("patatas"/100); //NaN Not a Number
  console.log("Es falso/falsy");
}

//Operadores ternarios
//expresión_A_evaluar ? return_si_es_true : return_si_es_false
let esTruthy = 10 < 200 ? "Es verdaderooo" : "Es falsooo";

console.log(esTruthy);
