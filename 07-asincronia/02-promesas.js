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
      //Aqui dentro iria un proceso para saber si es resolve or reject
      resolve("1. Canchita hecha!!!!"); //positivo
      // reject("1. se quemo la canchita"); //negativo
    }, 3000);
  });
};

const hacerBebidas = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2. Bebidas preparadas!")
    // reject("2. no hay bebidas");
  }, 2000)
})

hacerCanchita()
//para capturar el resolve tengo que utilizar then
.then((resultado) => {
  //con then capturamos lo que mande resolve y los podemos utilizar
  console.log(resultado);
  // console.log("2. Vamos por las bebidas");
  return hacerBebidas(); //retornando una nueva promesa, dentro del then de otra se llama encadenamiento de promesas
})
.then((resultado2) => {
  console.log(resultado2);
})
//cuando encadenamos promesas el catch funcionara para todas las promesas encadenadas
.catch((error) => {
  console.log(error);
})
