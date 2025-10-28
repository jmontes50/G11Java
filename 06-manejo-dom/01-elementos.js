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

const inputPassword = document.getElementById("input-password");
let mostrarPassword = false;

//EVENTOS
const btnPassword = document.getElementById("btn-password");

console.log(btnPassword);

//AddEventListener es un método que me va a permitir escuchar eventos predefinidos de los elementos, va a pedir 02 argumentos, 1ero, el nombre del evento y 2do una función a ejecutar
btnPassword.addEventListener("click", () => {
  console.log("se cambio el type del input password");
  // alert("Hiciste click!!!!");
  //negamos mostrarPassword para evaluar si es false
  if(!mostrarPassword){
    inputPassword.setAttribute("type", "text");
    mostrarPassword = true;
    //la propiedad innerText es el texto interno de un elemento
    btnPassword.innerText = "Ocultar Password";
  } else {
    inputPassword.setAttribute("type", "password");
    mostrarPassword = false;
    btnPassword.innerText = "Ver Password";
  }
})

const piePagina = document.querySelector("#pie-pagina");

//modifica ó lee el HTML interno que tiene un elemento
// piePagina.innerHTML = "<h2>Derechos Reservados 2025</h2>";
piePagina.innerHTML = `
  <h2 class="titulo-footer">Derechos Reservados 2025</h2>
  <p>Soy un párrafo</p>
  <p>Soy un párrafo</p>
  <p>Soy un párrafo</p>
`

const personas = ["Juan Perez", "Victor De la Cruz", "Alexis Sanchez"];

personas.forEach((per, index) => {
  piePagina.innerHTML = piePagina.innerHTML + `
    <div>
      <h4>${index + 1} - ${per}</h4>
    </div>
  `
})
