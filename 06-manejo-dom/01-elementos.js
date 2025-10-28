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
