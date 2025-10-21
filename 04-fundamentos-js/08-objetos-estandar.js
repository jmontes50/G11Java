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
