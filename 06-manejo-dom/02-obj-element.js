const Seccion1 = document.querySelector("#seccion1");

console.log(Seccion1)
console.log(typeof Seccion1)

//el innerHTML de un elemento HTML es un string
console.log(typeof Seccion1.innerHTML);

const frutas = ["Naranja", "Kiwi", "Chirimoya"];

//Opt1: Inyectando HTML

//hasta que ese string que tiene ul id frutas... no sea procesado por el navegador es un simple texto
Seccion1.innerHTML += `<ul id="frutas"></ul>`;

//estamos preguntando por el elemento de vuelta después que ha sido procesado por el navegador
const ulFrutas = document.querySelector("#frutas");

console.log(ulFrutas)

frutas.forEach((fru) => {
  // Seccion1.innerHTML += `<ul><li>${fru}</li></ul>`
  ulFrutas.innerHTML += `<li>${fru}</li>`
})

//Opt2: Creando Elementos
const Seccion2 = document.querySelector("#seccion2");

//createElement, crea un obj según el nombre de la etiqueta que le indiquemos
const objImg = document.createElement("img");

console.log(objImg);

objImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKEOcBxdChLlH9V9_yIVUmu61093Vwg2HLg&s");

objImg.setAttribute("alt", "Esta imagen es un logo de code")

//agrega un elemento como hijo de otro después del resto de elementos
//es como un .push pero para elementos html
Seccion2.appendChild(objImg);

//Opt3, utilizar funciones como componentes

const Seccion3 = document.querySelector("#seccion3");

const Card = (titulo, texto) => {
  //replicar y combinar todo el proceso de creación
  const divCard = document.createElement("div");
  console.log(divCard);
  //que para cuando se agrega ya se volvio contenido HTML
  divCard.innerHTML = `
    <h2>${titulo}</h2>
    <p>${texto}</p>
    <button class="btn">Click</button>
  `
  //algo que nos permite tener un elemento es buscar solo dentro de el
  const btn = divCard.querySelector(".btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    alert(`Estas viendo el producto ${titulo}`);
  })
  return divCard;
}

const miTarjeta = Card("Mouse", "Mouse inalambrico");
const miTarjeta2 = Card("Teclado", "Teclado mecánico");

//.push
Seccion3.appendChild(miTarjeta)
Seccion3.appendChild(miTarjeta2)
