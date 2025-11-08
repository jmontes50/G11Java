// useParams nos da un objeto con los parámetros que tenga la URL
//https://dominio.com/editar/dsdhisuad
///editar/:id ---> { id:dsdhisuad }
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { readProductById, updateProduct } from "../services/productosService";
import Input from "../components/Input";
import Swal from "sweetalert2"

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
  const navigate = useNavigate();

  const inputsInfo = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
    },
    { name: "descripcion", label: "Descripción del producto", type: "text" },
    { name: "precio", label: "Precio", type: "number" },
    { name: "stock", label: "Stock Producto", type: "number" },
    { name: "sku", label: "SKU", type: "text" },
    { name: "imagen", label: "Imagen URL", type: "text" },
  ];

  const handleInput = (ev) => {
    // console.log(ev.target);
    const value = ev.target.value;
    const name = ev.target.name; //llegará descripción, precio
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const result = await updateProduct(product);
      console.log(result);
      await Swal.fire({
        title:"Producto Editado",
        text:`${product.nombre} se editó exitosamente`,
        icon: "success",
        theme:"dark"
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productObtained = await readProductById(id);
        // console.log(productObtained);
        setProduct(productObtained);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
       <h1 className="text-2xl font-semibold pb-3">
          Actualizar Producto
        </h1>
        <form onSubmit={handleSubmit}>
          {inputsInfo.map((item, index) => (
            <Input
              key={index}
              name={item.name}
              label={item.label}
              type={item.type}
              handleInput={handleInput}
              value={product}
            />
          ))}
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </form>
    </div>
  );
};

export default UpdateProductView;
