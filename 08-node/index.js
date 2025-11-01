//todo lo que hayamos instalado ira a los node_modules y la forma de acceder es con un import directo
//ESModules la que utiliza import from
import axios from "axios";

console.log("Hola mundo desde node!!!");

const getData = async () => {
  try {
    //A diferencia de fetch ese objeto no combina rpta con el codigo. Lo da directo
    const response = await axios.get("https://68afa145b91dfcdd62bcb6b1.mockapi.io/prod_vanilla");
    console.log(response.data);
    console.log("fin de petición")
  } catch (error) {
    console.log(error)
  }
}

getData();
