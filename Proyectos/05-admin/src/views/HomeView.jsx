import { useState, useEffect } from "react"
import { readProducts } from "../services/productosService"

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await readProducts();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl">Dashboard</h1>
    </div>
  )
}

export default HomeView
