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
