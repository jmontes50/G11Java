import { useState, useEffect } from "react"
import { readProducts } from "../services/productosService"
import TableData from "../components/TableData";

const HomeView = () => {
  const [products, setProducts] = useState([]);

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
      <TableData data={products} />
    </div>
  )
}

export default HomeView
