//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

let carrito = [];

let agregarAlCarrito = (nuevoProducto) => {
  carrito.push(nuevoProducto);
  console.table(carrito);
}

//función flecha
let mostrarProductos = () => {
  for(let prod of productos){
    console.log(prod)
    let agregar = confirm(`Desea agregar ${prod.nombre} al carrito de compras?`); //boolean
    console.log(agregar)
    if(agregar) {
      agregarAlCarrito(prod);
    }
  }
}

mostrarProductos();
