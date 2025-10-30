const link = document.querySelector("#link");

link.addEventListener("click", (event) => {
  event.preventDefault(); //previene la accion por defecto de algo
  console.log(event);
  console.log("Click del hipervínculo");
})

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  //targer objetivo y nos indica de donde surgio el evento
  //el correo es por el name del input
  console.log(event.target.correo.value);
  // console.log(event.target.dataset)
   console.log("Intento de envio del formulario");
})
