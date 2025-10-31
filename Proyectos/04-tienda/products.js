//vamos a hacer una petición para traer los productos de Mockapi

const URI = "https://68afa145b91dfcdd62bcb6b1.mockapi.io/prod_vanilla";

const obtenerProductos = async () => {
  const respuesta = await fetch(URI); //solo me da la respuesta
  console.log(respuesta);

}

export {
  obtenerProductos
  //Uso llaves para exportar porque asumo que en un futuro podria tener otras funciones aquí
}
