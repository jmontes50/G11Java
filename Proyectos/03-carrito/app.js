//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

let carrito = [];

//función flecha
let mostrarProductos = () => {
  for(let prod of productos){
    console.log(prod)
  }
}

mostrarProductos();
