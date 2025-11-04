import axios from "axios";

const URL = "https://simple-api-2ivd.onrender.com/productos";

const readProducts = async () => {
  const response = await axios.get(URL);
  // console.log(response);
  if(response.status !== 200) {
    throw new Error("Error al obtener las datos")
  }
  return response.data;
}

export {
  readProducts
}
