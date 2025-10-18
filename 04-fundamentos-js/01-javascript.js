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
// cambiarle el tipo
console.log(Number(cantidad) + 75);

//en unos momentos lo solucionamos
