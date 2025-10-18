// soy un comentario :D de línea
/**
 * y aquí podemos
 * escribir
 * varias líneas,
 * ideas para documentación
 */
console.log("Hola mundo!!!");

// a diferencia de otros lenguajes, JS tiene un tipado dinámico
// let es la forma que declaramos variables
let nombre = "Juan"; //string
console.log(nombre);
nombre = "Juancho";
console.log(nombre);

let edad = 30; //number

console.log(typeof nombre);
console.log(typeof edad);

let estaLloviendo = false; //boolean
console.log(estaLloviendo);
console.log(typeof estaLloviendo);

//tipado dínamico, podemos cambiar el tipo de dato de una variable
let numero = 20;
// el console.log() puede recibir varios parámetros
console.log("Como Número", numero);

numero = "veinteeeee";
console.log("Como String", numero);

// undefined, aún no esta definido
let regalo;
console.log(regalo);

//null, NO ES primitivo
let nulo = null;
console.log(nulo);
console.log(typeof nulo);

let cantidad = "100";
console.log(typeof cantidad);

console.log(cantidad * 20);

// Aunque podemos utilizar + para concatenar podemos tener problemas al concatenar con números
console.log("Juan " + "Perez")
console.log(cantidad + 75);
// cambiar el tipo de dato
//Number
console.log("Number", Number(cantidad) + 75);
//ParseInt, parsear a un Entero
console.log("parseInt:", parseInt(cantidad) + 75);
//ParseFloat, cambiar a un número de punto flotante (decimal)
console.log("parseFloat:", parseFloat(cantidad) + 75);

//Solución para concantenar, template literals (`` backticks)
console.log(`Juan al llegar trajo
${cantidad} cajas por un total de
${Number(cantidad) * 50} USD`);

//operaciones aritméticas
console.log("suma:", 10 + 20);
console.log("resta:", 10 - 20);
console.log("multiplicación:", 10 * 20);
console.log("división:", 200 / 5);
console.log("módulo/residuo:", 203 % 5);

//operadores aritméticos
let a = 10;
// a = a + 1;
a++;
console.log(a);

let b = 10;
// b = b - 1;
b--;
console.log(b);

let c = 100;
// c = c + 7;
c+=7;
console.log(c);

let x = 20;
// x = x * 3;
x*=3;
console.log(x)

let y = 90;
// y = y / 2;
y/=2;
console.log(y)
