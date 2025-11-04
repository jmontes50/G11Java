import { useState, useEffect } from "react";

const App = () => {
  // [getter, setter]
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("Hola!");
  const [posts, setPosts] = useState([]);

  console.log("1. estoy dentro de la función");

  const manejarInput = (evento) => {
    //target es de donde si disparo el evento
    // console.log(evento.target.value)
    setTexto(evento.target.value);
  };

  //lo que hace useEffect es escuchar los cambios de todos los estados y cuando escucha alguno se ejecuta
  useEffect(() => {
    console.log(contador);
    console.log(texto);
  }, [texto]);

  useEffect(() => {
    console.log("2. Dependencias Vacias en el useEffect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((rpta) => rpta.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
    // si a las dependencias del useEffect, las dejamos como un array vacio, esta solo se ejecutará una vez
  }, []);

  return (
    <div>
      {console.log("3.estoy dentro del return")}
      {console.log("3.1 estoy dentro del return también", posts)}
      <h2>Contador Valor: {contador}</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
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
      <hr />
      <h2>Posts</h2>
      <ul>
        {/* renderizado de listas, se refiere a como a partir de un Array podemos transformarlo en JSX */}
        {/* array -> varios li */}
        {/* {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })} */}
        {/* React usa () cuando va a retornar directamente JSX, aquí ya no es necesario el return */}
        {posts.map((post) => (
          //aplican las reglas generales de JSX
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
