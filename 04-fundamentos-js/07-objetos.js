//al momento que usamos {} con una variable estamos indicando que es un objeto
let perro = {
  //propiedad: valor,
  nombre: "Luna",
  edad: 4,
  color: "Blanco/Negro",
  amigable: false,
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
  "vacunado-2025": true,
  "tiene-chip": "Si tiene, 1234567",
  dormir () {
    console.log("zzzz")
  },
}

console.log(perro);

console.table(perro2);
//como acceder a propiedades
console.log("Nombre:",perro.nombre); //sintaxis de punto

let nombrePropiedad = "amigable";

console.log("Amigable:",perro[nombrePropiedad]); //sintaxis de corchetes

console.log("Vacunado:",perro2["vacunado-2025"]); //sintaxis de corchetes

//Desestructuración, aplicamos para no repetir perro. perro.
//pero necesitamos saber los nombres de las propiedades

let { edad, color, nombre, } = perro;

console.log(edad);
console.log(color);
console.log(nombre);

let { edad:edad2, color:color2, nombre:name2, } = perro2;

console.log(edad2);
console.log(color2);
console.log(name2);

//usando métodos
perro.ladrar();

perro2.dormir();

//Aplicar desestructuración en los parámetros
let registrarMascota = ({ nombre, edad, color, amigable, peso }) => {
  console.log(`La mascota ${nombre} de ${edad} y color ${color} es ${amigable} de ${peso} kilogramo`);
}

let nuevaMascota = {
  edad:3,
  nombre:"Rubí",
  peso:6,
  amigable:false,
  color:"blanca",
}

// registrarMascota("Rubí", 3, "blanca", false);
registrarMascota(nuevaMascota);
