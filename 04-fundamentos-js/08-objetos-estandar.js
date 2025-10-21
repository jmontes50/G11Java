let texto = "Hola Mundo!";

console.log(texto.length);

console.log(texto.toUpperCase());

console.log(texto);

let frase = new String("el código muy a la derecha es malo"); //No es muy recomendable usar esta forma para declarar primitivos

console.log(frase);

console.log(frase.length);

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

console.log(frase.includes("gato"));

//-----------Objeto Math ---------------------
//Math no tine que ser instanciado, como una clase con métodos estáticos
console.log("Round:", Math.round(2.4)); //.5 redondea para arriba

console.log("Ceil:", Math.ceil(2.1));

console.log("Floor:", Math.floor(2.9));

console.log("Random:", Math.random()); //un número aleatorio entre 0 y 1

console.log("PI", Math.PI);

console.log("Euler:", Math.E);

//-----------Objeto Date-----------------------
let hoy = new Date();

console.log("Hoy", hoy);

let halloween = new Date("2025-10-31");

console.log(halloween);

console.log(hoy.getFullYear());

console.log(hoy.getMonth()); //JS cuenta los meses desde 0, 0 es Enero

console.log(hoy.getDay());

console.log(hoy.getTime()); //timestamp, t milisegundos a partir de 01 Enero 70
//use nTimestamp
let timestampHoy = hoy.getTime();

let timestampHalloween = halloween.getTime();

console.log(timestampHoy)

console.log(timestampHalloween)

let tiempoHastaHalloween = timestampHalloween - timestampHoy

console.log(tiempoHastaHalloween);

let diasHalloween = tiempoHastaHalloween / 1000 / 60 / 60 / 24;

console.log(diasHalloween);

