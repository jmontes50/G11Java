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

//función flecha
let mostrarProductos = () => {
  for(let prod of productos){
    console.log(prod);
    let agregar = confirm(`Desea agregar ${prod.nombre} al carrito de compras?`); //es la ventanita que nos pregunta para confirmar y da un booleano
    console.log({ agregar });
    if(agregar) { //si es que deseamos agregar el producto
      let cantidad = Number(prompt("Cuál es la cantidad que deseas comprar?"));
      console.log({ cantidad });
      if(cantidad <= prod.stock){ //si es que la cantidad a comprar es menor al stock actual del producto
        agregarAlCarrito(prod, cantidad);
      }else{
        console.log(`No se puede agregar ${prod.nombre}`);
      }
    }
  }
}

mostrarProductos();








//rest parameters
/**
 * let miFuncion = (a, b, ...rest) => {
  console.log(a)
  console.log(b)
  console.log(rest)
}

miFuncion(10, 20, 30, 40, 50, 60, 100)
 */
