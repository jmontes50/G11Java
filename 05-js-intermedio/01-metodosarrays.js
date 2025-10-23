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

//Map, a partir de un arreglo me permite transformarlo y obtener otro arreglo ya transformado
let frutasMayusculas = frutas.map((fru, index) => {
  return `${index + 1}. ${fru.toUpperCase()}`; //1. FRUTA
})

console.log("Map: ", frutasMayusculas);
