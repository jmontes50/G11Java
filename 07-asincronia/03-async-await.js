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

  // setTimeout(() => {
  //   return "1. Canchita hecha!!!!"; //esta es una limitación por sintaxis
  // }, 3000)
}

const hacerBebidas = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2. Bebidas preparadas!")
    // reject("2. no hay bebidas");
  }, 2000)
})

const notificar = () => {
  console.log("Ya esta!")
}

const entrarALaSala = () => {
  console.log("Entrando a la sala de cine")
}


const ejecutarTodo = async () => {
  //trycatch no es netamente de Promesas o async await, es para capturar errores
  try {
    //la parte que deseamos que ejecute
    const res1 = await hacerCanchita(); //espera
    console.log(res1);
    // alert("hola!")
    notificar();
    const res2 = await hacerBebidas(); //espera
    entrarALaSala();
    console.log(res2);

  } catch (error) {
    //como manejamos un resultado negativo y error
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
