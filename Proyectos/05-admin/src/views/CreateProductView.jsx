import { useState } from "react";
import Input from "../components/Input";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    sku: "",
    activo: true,
    imagen: "",
    categoriaId: 0,
  });

  const inputsInfo = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
    },
    { name: "descripcion", label: "Descripción del producto", type: "text" },
    { name: "precio", label: "Precio", type: "number" },
  ];

  const handleInput = (ev) => {
    const value = ev.target.value;
    setProduct({ ...product, nombre: value });
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
