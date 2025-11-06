import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    // BR, Una envoltura que nos conecta a la history API de js
    <BrowserRouter>
      <Routes>
        {/* Route representa cada vista con su componente */}
        <Route path="/" element={<HomeView />} />
      </Routes>
      {/* <HomeView /> */}
    </BrowserRouter>
  )
}

export default App
