// const hacerCanchita = () => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve("1. Canchita hecha!!!!"); //positivo
//       // reject("1. se quemo la canchita"); //negativo
//     }, 3000);
//   });
// };

// async function hacerCanchita () {}
const hacerCanchita = async () => {
  //return sera positivo equivale un resolve
  //throw sera negativo equivale un reject
  return "1. Canchita hecha!!!!";
  // throw "1. mala partida";
}

const hacerBebidas = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2. Bebidas preparadas!")
    // reject("2. no hay bebidas");
  }, 2000)
})


const ejecutarTodo = async () => {
  //trycatch no es netamente de Promesas o async await, es para capturar errores
  try {
    const res1 = await hacerCanchita(); //espera
    console.log(res1);
    const res2 = await hacerBebidas(); //espera
    console.log(res2);
  } catch (error) {
    console.log(error);
  }

}
ejecutarTodo();

/*
hacerCanchita()
.then((resultado) => {

  console.log(resultado);
  // console.log("2. Vamos por las bebidas");
  return hacerBebidas();
})
.then((resultado2) => {
  console.log(resultado2);
})

.catch((error) => {
  console.log(error);
})
*/
