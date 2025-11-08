import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProducts } from "../services/productosService";
import TableData from "../components/TableData";
import { Pencil, Trash } from "lucide-react";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const headersData = [
    { name: "nombre", label: "Nombre producto" },
    { name: "descripcion", label: "Descripción" },
    // pipe significa tubería
    { name: "precio", label: "Precio", pipe: (texto) => `S/ ${texto.toFixed(2)}` },
    { name: "stock", label: "Stock", pipe: (texto) => `${texto} unid.` },
  ]

  const handleDelete = (id) => {
    console.log("Eliminar!!!", id)
  }

  const actions = [
    {
      content: (info) => (
        <button
          className="btn btn-sm bg-yellow-500 text-white"
          onClick={() => {navigate(`/updateproduct/${info.id}`)}}
        >
          <Pencil />
        </button>
      )
    },
    {
      content: (info) => (
        <button
          className="btn btn-sm bg-red-600 text-white"
          onClick={() => {handleDelete(info)}}
        >
          <Trash />
        </button>
      )
    }
  ]

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await readProducts();
        // console.log(data);
        setProducts(data.productos);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl">Dashboard</h1>
      {/* {products.map((prod) => (
        <ul key={prod.id}>
          <li>{prod.nombre}</li>
        </ul>
      ))} */}
      <TableData
        data={products}
        headers={headersData}
        actions={actions}
      />
    </div>
  )
}

export default HomeView
