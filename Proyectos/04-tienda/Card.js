// import agregarAlCarrito ...

const Card = (producto, agregarAlCarro) => {
  //desestructurando producto
  const { nombre, precio, stock } = producto;
  //creamos un obj equivalente a un div aqui en JS
  const divProducto = document.createElement("div");
  //rellenamos el obj con html, pero en forma de string
  divProducto.innerHTML = `

      <div class="p-4 border border-gray-400 rounded">
        <h2 class="text-lg font-semibold">${nombre}</h2>
        <p class="">Precio: S/ ${precio}</p>
        <p class="text-sm text-gray-600">Stock: ${stock}</p>
        <button class="bg-blue-600 rounded px-2 py-1 text-white w-full mt-3 text-sm">
          Agregar
        </button>
      </div>
  `;
  //aquí en querySelector estoy usando un selector de etiqueta de CSS
  const boton = divProducto.querySelector("button");
  console.log({ boton });
  boton.addEventListener("click", () => {
    alert(`Diste click en ${nombre}`);
    // vamos a ejecutar la función que recibimos como parámetro
    agregarAlCarro(producto, 1)
  })

  return divProducto;
}

//al ser 01 sola referencia a exportar usamos default y es necesario exportarlo para que podamos usarlo en otros archivos
export default Card;
