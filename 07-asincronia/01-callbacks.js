//js es sincrono

console.log("1");

//setTimeout es algo que retrasa al ejecución de algo
//setTimeout(funcion, tiempoEnMs)
// setTimeout(() => {
//   console.log("2");
// }, 3000)
const tarea1 = (unaFuncion) => {
  setTimeout(function () {
    console.log("2");
    //La función callback que recibimos la vamos a ejecutar despues de el console.log(2)
    unaFuncion();
  }, 3000)
}

tarea1(function(){
  console.log("3");
});




//ignoremos por ahora el codigo de abajo

const btn = document.querySelector("#btn");

//el console.log 4 no se queda en el aire esperando a que el usuario de click
btn.addEventListener("click", function(){
  alert("Me has hecho click!!!!");
})

//simplemente se ejecuta
// console.log("4");
