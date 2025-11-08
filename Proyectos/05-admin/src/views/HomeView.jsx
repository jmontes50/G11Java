import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProducts, deleteProduct } from "../services/productosService";
import TableData from "../components/TableData";
import { Pencil, Trash } from "lucide-react";
import Swal from "sweetalert2";

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

  const handleDelete = async (info) => {
    // console.log("Eliminar!!!", id)
    const confirm = await Swal.fire({
      title:`Deseas eliminar ${info.nombre}?`,
      text: 'Esta acción es irreversible',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      showConfirmButton: true,
      confirmButtonText: "Sí, eliminar",
      theme: "dark"
    })
    try {
      // console.log(confirm)
      await deleteProduct(info.id);
      //filtrar productos por el id que ya eliminamos con la petición
      const filteredProducts = products.filter((prod) => {
        //todos los productos con id diferente de info.id
        return prod.id !== info.id
      })
      //actualizo el estado del componente solo con los datos filtrados
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error)
    }
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
