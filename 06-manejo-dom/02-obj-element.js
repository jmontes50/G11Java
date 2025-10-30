const Seccion1 = document.querySelector("#seccion1");

console.log(Seccion1)
console.log(typeof Seccion1)

//el innerHTML de un elemento HTML es un string
console.log(typeof Seccion1.innerHTML);

const frutas = ["Naranja", "Kiwi", "Chirimoya"];

//hasta que ese string que tiene ul id frutas... no sea procesado por el navegador es un simple texto
Seccion1.innerHTML += `<ul id="frutas"></ul>`;

//estamos preguntando por el elemento de vuelta después que ha sido procesado por el navegador
const ulFrutas = document.querySelector("#frutas");

console.log(ulFrutas)

frutas.forEach((fru) => {
  // Seccion1.innerHTML += `<ul><li>${fru}</li></ul>`
  ulFrutas.innerHTML += `<li>${fru}</li>`
})
