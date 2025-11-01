import { useState } from "react";

const App = () => {
  // const [getter, setter] = useState(valorInicial)
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    console.log("Hola desde aumentar!");
    contador++;
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
