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

//LOCAL STORAGE
// setItem permite guardar información setItem("nombre", "valor")
localStorage.setItem("nombre", "Jorge Montesinos");

//permite leer lo guardado en localStorage
const item = localStorage.getItem("nombre");

console.log(item);

const objUser = {
  rol: "supervisor",
  nombre: "Jorge",
  id: 537126
}
//pero como solo podemos guardar texto de ser algo completo lo tenemos que stringificar con JSON.stringify
const JSONobjUser = JSON.stringify(objUser);

console.log(JSONobjUser);
console.log(typeof JSONobjUser);

//ya convertido lo podemos guardar
localStorage.setItem("userData", JSONobjUser);

const dataUserAgain = localStorage.getItem("userData");
//con .parse podemos volver a convertir de string a js
console.log(JSON.parse(dataUserAgain))
