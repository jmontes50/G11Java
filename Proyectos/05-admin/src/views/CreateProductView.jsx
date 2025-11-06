import { useState } from "react";
import Input from "../components/Input";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    nombre: "Jorge",
    descripcion: "",
    precio: 0,
    stock: 0,
    sku: "",
    activo: true,
    imagen: "",
    categoriaId: 1,
  });

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

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold pb-3">Crear Producto</h1>
      <form>
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
        {/* <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={product.nombre}
          onChange={handleInput}
        /> */}
      </form>
    </div>
  );
};

export default CreateProductView;
