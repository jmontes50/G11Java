//sintaxis clásica de una función
function sumar (a, b){
  return a + b;
}

console.log(sumar(10, 30));

//funciones anónimas
//Ciudadano de primera clase
//Significa que podemos usar la referencia de una función como una variable más
let resta = function (a, b) {
  return a - b;
}

console.log(resta(50, 20));

function operacion (a, b, tarea) {
  console.log("Esto es tarea:", tarea);
  return tarea(a, b); //función
}

console.log(operacion(100, 200, sumar));

console.log(operacion(100, 200, resta));

//funciones flecha
//(parametros) => {codigo a ejecutar}
// let multiplicacion = (a, b) => {
//   return a * b;
// }

//(parametros) => expresión a retornar
//cuando el codigo es corto
let multiplicacion = (a, b) => a * b;

console.log(multiplicacion(5, 70));

//cuando tenemos 01 solo parámetro, podemos quitar los parentesís
// let saludar = (nombre) => `Hola ${nombre}`;
let saludar = nombre => `Hola ${nombre}`;

console.log("Saludoooo:", saludar("Araceli"));

