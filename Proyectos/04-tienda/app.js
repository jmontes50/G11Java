import Card from "./Card.js";

//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

//NT: si desean usar una referencia tenemos que asegurarnos que esa referencia exista antes de invocarla.

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
    cantidad
  }
  carrito.push(nuevoProducto);
  console.log("Observando carrito...");
  console.table(carrito);
}

//Manejando el DOM
const divRoot = document.querySelector("#root");

const dibujarProductos = () => {
  //por cada prod que encontremos en productos...
  productos.forEach((prod) => {
  //... generaremos una Tarjeta desde el archivo Card.js
    const prodCard = Card(prod);
    //con appendChild cada div generado por la función Card se agrega como elemento hijo del divRoot
    divRoot.appendChild(prodCard);
  })
}

dibujarProductos();
