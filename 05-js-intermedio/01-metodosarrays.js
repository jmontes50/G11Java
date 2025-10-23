let frutas = ["Kiwi", "Manzana", "Naranja"];

//imperativa, indicar como se va a ejecutar algo muy detalladamente 7(paso x paso)
/*
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
}
  */

//declarativa, indicar cual es el resultado que deseamos obtener
//forEach, fru (le podemos cualquier nombre) representa c/item del array
frutas.forEach((fru, index, arreglo) => {
  console.log(fru); //cada item del arreglo
  console.log(index); //la posición/indice de cada item
  console.log(arreglo); //el array original
})

//Map, a partir de un arreglo me permite transformarlo y obtener otro arreglo nuevo! ya transformado
let frutasMayusculas = frutas.map((fru, index) => {
  return `${index + 1}. ${fru.toUpperCase()}`; //1. FRUTA
})

console.log("Original", frutas);
console.log("Map: ", frutasMayusculas);

//---------------------------------------------
let productos = [
  { nombre: "Mouse", precio: 40 },
  { nombre: "Teclado", precio: 50},
  { nombre: "USB", precio: 15}
]

//Filter, permite filtrar en base a una expresión items de un array
//vamos a recorrer item x item (prod)
let productosFiltrados = productos.filter((prod, index) => {
  return prod.precio < 45;
})
console.log("Filter: ", productosFiltrados);

let edades = [20, 18, 30, 17, 40, 45];

//sort
// let edadesOrdenadas = edades.sort();
//No utilizemos .sort() en vez utilicemos .toSorted();
let edadesOrdenadas = edades.toSorted();
console.log("edades original: ", edades);
console.log("sort: ", edadesOrdenadas);

//reduce
let sumaEdades = edades.reduce((acumulador, item) => {
  console.log({ acumulador });
  console.log({ item });

  return acumulador + item;
})

console.log({ sumaEdades });

/**
 * let productos = [
  { nombre: "Mouse", precio: 40 },
  { nombre: "Teclado", precio: 50},
  { nombre: "USB", precio: 15}
]
 */

//reduce con objetos
//reduce toma como valir inicial de acumulador el primer item que tenga
//si es algo incorrecto lo tomará de todas maneras
let totalAPagar = productos.reduce((acumulador, prod) => {
  console.log({ acumulador });
  console.log(prod.precio);
  return acumulador + prod.precio;
  //el segundo argumento que puede recibir reduce es el valor inicial del acumulador
}, 0)

//nos aparecerá [object Object] cuando estemos realizando una operación valida pero con objetos
console.log(totalAPagar);
