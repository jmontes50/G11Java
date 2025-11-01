import Card from "./Card.js";
//importamos también obtenerProductos para la petición
import { obtenerProductos } from "./products.js";

//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

//NT: si desean usar una referencia tenemos que asegurarnos que esa referencia exista antes de invocarla.

const spanCantidad = document.querySelector("#cantidad-carrito");
let carrito = [];

let agregarAlCarrito = (producto, cantidad) => {
  //copia del objeto agregando cantidad
  // let nuevoProducto2 = { ...producto, cantidad };
  // console.table(nuevoProducto2);
  let { nombre, precio } = producto; //desestructuración
  let nuevoProducto = {
    //nombre: nombreProducto, ahi si colocamos 2 puntos
    //si el valor tiene el mismo nombre que la propiedad, podemos quedarnos con uno solo,
    //nombre:nombre, //claridad en el código
    nombre,
    precio,
    cantidad,
  };
  carrito.push(nuevoProducto);
  console.log("Observando carrito...");
  console.table(carrito);
  //.innerText no modifica el HTML solo el texto interno de un elemento
  spanCantidad.innerText = carrito.length;


};

//Manejando el DOM
const divRoot = document.querySelector("#root");


const dibujarProductos = async () => {
  try {
    //antes de dibujar hacemos la petición
    const productosObtenidos = await obtenerProductos();

    //por cada prod que encontremos en productos...
    productosObtenidos.forEach((prod) => {
      //... generaremos una Tarjeta desde el archivo Card.js
      const prodCard = Card(prod, agregarAlCarrito);
      //con appendChild cada div generado por la función Card se agrega como elemento hijo del divRoot
      divRoot.appendChild(prodCard);
    });
  } catch (error) {
    console.log(error);
  }
};

dibujarProductos();

//Dialog
const dialog = document.querySelector("#ventana-modal");
const btnCarrito = document.querySelector("#btn-carrito");
const rootCarrito = document.querySelector("#root-carrito");

btnCarrito.addEventListener("click", () => {
  //abrimos el dialog en forma de modal
  dialog.showModal();
  //rellenamos el div con la info del carrito
  rootCarrito.innerHTML = JSON.stringify(carrito);
})
