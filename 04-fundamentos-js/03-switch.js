let mes = Number(prompt("Ingrese el número del mes"));
//mes <= 1 ó >= 3 ---> verano
/*
switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("Ingrese un valor adecuado");
}
*/

switch(true) {
  case mes >= 1 || mes <= 3:
    console.log("Es verano");
    break;
  default:
    console.log("Ingrese un valor adecuado");
}
