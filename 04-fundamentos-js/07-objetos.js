//al momento que usamos {} con una variable estamos indicando que es un objeto
let perro = {
  //propiedad: valor,
  nombre: "Luna",
  edad: 4,
  color: "Blanco/Negro",
  amigable: true,
  ladrar: function(){
    console.log("Si es otro perrito WAU WAU WAU");
  }
}

let perro2 = {
  nombre: "Negra",
  edad: 5,
  color: "Negro",
  amigable: true
}

console.log(perro);

console.table(perro2);

console.log(perro.nombre);
