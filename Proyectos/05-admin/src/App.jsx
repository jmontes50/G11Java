import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView";

const App = () => {
  return (
    // BR, Una envoltura que nos conecta a la history API de js
    <BrowserRouter>
      <Routes>
        {/* Route representa cada vista con su componente */}
        <Route path="/" element={<HomeView />} />
        <Route path="/crearproducto" element={<CreateProductView />} />
      </Routes>
      {/* <HomeView /> */}
    </BrowserRouter>
  )
}

export default App
