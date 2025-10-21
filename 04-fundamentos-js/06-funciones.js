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
  return tarea(a, b); //función
}

console.log(operacion(100, 200, sumar));

console.log(operacion(100, 200, resta));
