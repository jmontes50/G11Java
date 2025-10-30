/*
const hacerCanchita = function(cb) {
  setTimeout(function(){
    console.log("1. Canchita hecha!!!!");
    cb();
  }, 3000)
}

hacerCanchita(function(){
  console.log("2. Vamos por las bebidas");
});
*/

const hacerCanchita = () => {
  return new Promise(function(resolve, reject) {
    //dentro de la promesa indicamos la tarea asíncrona
    setTimeout(function(){
      // console.log("1. Canchita hecha!!!!");
      //y de ser positivo el resultado podemos usar resolve
      resolve("1. Canchita hecha!!!!");
    }, 3000);
  });
};

hacerCanchita()
//para capturar el resolve tengo que utilizar then
.then((resultado) => {
  //con then capturamos lo que mande resolve y los podemos utilizar
  console.log(resultado);
  console.log("2. Vamos por las bebidas");
})
