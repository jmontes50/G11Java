let i = 0;

//while(expresion_verdadera)
/*
while(i < 10) {
  console.log(`El valor es ${i}`);
  i++;
}
*/

//do while
/*
let tienePermisos = false;

do{
  console.log("agregar tiene permisos?");
  //confirm es similar un prompt pero recibirá un booleano en ves de un string
  tienePermisos = confirm("El usuario tendrá permisos?")
  console.log(tienePermisos);
} while(tienePermisos === true);

console.log("fin del script");
*/

//for
for(let i = 0; i < 5; i++){
  console.log(`El valor de i es : ${i}`);
}

//! las expresiones recibidas por un while, un do-while y un for pueden ser
//expresiones truthy and falsy
//falsy: undefined, null, 0 , "", NaN
