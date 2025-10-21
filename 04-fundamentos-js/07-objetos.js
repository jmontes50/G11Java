//al momento que usamos {} con una variable estamos indicando que es un objeto
let perro = {
  //propiedad: valor,
  nombre: "Luna",
  edad: 4,
  color: "Blanco/Negro",
  amigable: true,
  //método

  ladrar: function(){
    //this hace referencia al propio objeto donde esta presente
    console.log(`${this.nombre} ladra si es otro perrito: WAU WAU WAU`);
  }
  // ladrar: () => {
  //   //la función flecha hace referencia a window, window es el navegador
  //   //aquí el this pertenece a window
  //   //No utilizar funciones flecha dentro de objetos
  //   console.log(`${this.nombre} ladra si es otro perrito: WAU WAU WAU`);
  // }
}

let perro2 = {
  nombre: "Negra",
  edad: 5,
  color: "Negro",
  amigable: true,
  dormir () {
    console.log("zzzz")
  },
}

console.log(perro);

console.table(perro2);

console.log(perro.nombre);

perro.ladrar();

perro2.dormir();
