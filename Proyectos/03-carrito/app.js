//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

//NT: si desean usar una referencia tenemos que asegurarnos que esa referencia exista antes de invocarla.

let carrito = [];


let agregarAlCarrito = (nuevoProducto) => {
  carrito.push(nuevoProducto);
  console.table(carrito);
}

//función flecha
let mostrarProductos = () => {
  for(let prod of productos){
    console.log(prod);
    let agregar = confirm(`Desea agregar ${prod.nombre} al carrito de compras?`); //boolean
    console.log({ agregar })
    if(agregar) { //si es que deseamos agregar el producto
      let cantidad = Number(prompt("Cuál es la cantidad que deseas comprar?"));
      console.log({ cantidad });
      agregarAlCarrito(prod);
    }
  }
}

mostrarProductos();
