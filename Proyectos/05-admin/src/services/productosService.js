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

const readProductById = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  if(response.status !== 200){
    throw new Error("Error al obtener las datos")
  }
  // axios da los datos de la petición en la propiedad data
  return response.data;
}

const updateProduct = async (productEdited) => {
  const response = await axios.put(`${URL}/${productEdited.id}`, productEdited);
  if(response.status !== 200) {
    throw new Error("Error al actualizar los datos")
  }
  return response.data;
}

const createProduct = async (newProduct) => {
  const response = await axios.post(URL, newProduct);
  if(response.status !== 201) {
    throw new Error("Error al crear el producto")
  }
  return response.data;
}

const deleteProduct = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  console.log({ response })
  if(response.status !== 204) {
    throw new Error("Error al actualizar los datos")
  }
  return response.data;
}

export {
  readProducts,
  createProduct,
  readProductById,
  updateProduct,
  deleteProduct
}
