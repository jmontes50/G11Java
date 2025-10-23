//carrito de compras
let productos = [
  { nombre: "Camiseta", precio: 25, stock: 4 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatillas", precio: 60, stock: 2 },
];

//NT: si desean usar una referencia tenemos que asegurarnos que esa referencia exista antes de invocarla.

let carrito = [];


let agregarAlCarrito = (producto, cantidad) => {
  let { nombre, precio } = producto; //desestructuración
  let nuevoProducto = {
    //nombre: nombreProducto, ahi si colocamos 2 puntos
    //si el valor tiene el mismo nombre que la propiedad, podemos quedarnos con uno solo,
    //nombre:nombre, //claridad en el código
    nombre,
    precio,
    cantidad
  }
  console.table(nuevoProducto);
  // carrito.push(nuevoProducto);
  // console.table(carrito);
}

//función flecha
let mostrarProductos = () => {
  for(let prod of productos){
    console.log(prod);
    let agregar = confirm(`Desea agregar ${prod.nombre} al carrito de compras?`); //es la ventanita que nos pregunta para confirmar y da un booleano
    console.log({ agregar });
    if(agregar) { //si es que deseamos agregar el producto
      let cantidad = Number(prompt("Cuál es la cantidad que deseas comprar?"));
      console.log({ cantidad });
      agregarAlCarrito(prod, cantidad);
    }
  }
}

mostrarProductos();
