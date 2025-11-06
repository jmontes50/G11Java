// useParams nos da un objeto con los parámetros que tenga la URL
//https://dominio.com/editar/dsdhisuad
///editar/:id ---> { id:dsdhisuad }
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { readProductById } from "../services/productosService";

const UpdateProductView = () => {
  const [product, setProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    sku: "",
    activo: true,
    imagen: "",
    categoriaId: 1,
  });

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productObtained = await readProductById(id);
        // console.log(productObtained);
        setProduct(productObtained);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  },[]);

  return (
    <div>UpdateProductView</div>
  )
}

export default UpdateProductView
