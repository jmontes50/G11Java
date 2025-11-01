import { useState } from "react";

const App = () => {
  // const [getter, setter] = useState(valorInicial)
  //parte del trabajo del setState es indicar a React que debe actualizar la interfaz]
  //cada vez que haya un cambio de estado (y también de props) el componente se volverá a renderizar
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    console.log("Hola desde aumentar!");
    // contador++; //no funciona al menos no para actualizar la interfaz
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* la manera de manejar Eventos es con el attributo onEvento={funcion} */}
      <button onClick={aumentar}>Aumentar!</button>
    </div>
  )
}

export default App
