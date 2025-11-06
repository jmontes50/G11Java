import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView";
import UpdateProductView from "./views/UpdateProductView";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    // BR, Una envoltura que nos conecta a la history API de js
    <BrowserRouter>
      {/* afuera de Routes podemos colocar JSX */}
      <Navbar />
      <Routes>
        {/* Route representa cada vista con su componente */}
        <Route path="/" element={<HomeView />} />
        <Route path="/crearproducto" element={<CreateProductView />} />
        {/* cuando queremos recibir un parametro por l url con react router colocamos : como prefijo y luego el nombre de lo que recibiremos */}
        <Route path="/updateproduct/:id" element={<UpdateProductView/>} />
      </Routes>
      {/* <HomeView /> */}
    </BrowserRouter>
  )
}

export default App
