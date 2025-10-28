//window representa la ventana en si del navegador
console.log(window.location.href);

console.log(document);

const seccion = document.getElementById("principal");

console.log(seccion);

const Titulo1 = document.getElementById("titulo1");

console.log(Titulo1);

//innerHTML es una propiedad que me permite leer y/o modificar el html interno de un elemento
Titulo1.innerHTML = "Título modificado desde JS";

//con style podemos acceder a diferentes propiedades de CSS del elemento desde JS --> style.nombrePropiedad
Titulo1.style.color = "red";
Titulo1.style.padding = "20px";
//background-color ---kebab-case
//backgroundColor ---camelCase
Titulo1.style.backgroundColor = "skyblue";

//funciona usando la sintaxis de un selector de CSS, . para clases # para Id's y en general todo lo que se podia usar en CSS comos selector, etiquetas, pseudoclases, atributos
const Titulo2 = document.querySelector(".titulo2");
console.log(Titulo2);
Titulo2.style.border = "2px solid blue";

const Main = document.querySelector("main");

Main.style.backgroundColor = "gold";

//Accediendo a varios elementos
//querySelectorAll funciona muy parecido a querySelector, con la diferencia que retornara todos los elementos que coincidan con ese selector dentro de un NodeList (Array)
const liItems = document.querySelectorAll(".item_lista");

console.log(liItems);

//al obtener un NodeList podemos iterar en ellos usando forEach
liItems.forEach((li) => {
  console.log(li);
  li.style.color = "green";
  li.style.fontWeight = "bold";
})
//1. seleccionar el item
const inputEmail = document.querySelector("#input-email");
//2. leer, modificar o agregar algun valor del elemento html
console.log(inputEmail);

console.log(inputEmail.getAttribute("type"));

inputEmail.setAttribute("type","text");
