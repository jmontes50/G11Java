import { useState, useEffect } from 'react'

const App = () => {
  // [getter, setter]
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("Hola!")

  const manejarInput = (evento) => {
    //target es de donde si disparo el evento
    console.log(evento.target.value)
    setTexto(evento.target.value);
  }

  useEffect(() => {
    console.log(contador);
  });

  return (
    <div>
      <h2>Contador Valor: {contador}</h2>
      <button onClick={ () => { setContador(contador+1) } }>
        Aumentar!!!
      </button>
      <hr />
      {/* amarrar el value de un input a un estado se llama, Componentes Controlados */}
      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        // onChange hace referencia a cuando un input tiene un cambio de valor
        onChange={manejarInput}
      />
    </div>
  )
}

export default App
