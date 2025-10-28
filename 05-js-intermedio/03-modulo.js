
//cuando utilizamos llaves tenemos que importar usando especificamente el nombre
import { saludar, nombre } from "./03-modulos-exportados.js";
// import { operacion } from "./functions/file_function.js";

//si importamos algo por defecto no son necesarias las llaves {}
// import config from "./modules/file_module.js"
//si importamos por defecto algo, al momento de importarlo le podemos cambiar de nombre
import miConfiguracion from "./modules/file_module.js";

import operacion, { cambiarAString, incluyeTexto } from "./functions/file_function.js";

console.log(saludar("Jorge"));

console.log(operacion(10, 50));

console.log(miConfiguracion)

console.log(nombre);

console.log(cambiarAString(1000))

console.log(typeof cambiarAString(1000))

console.log(incluyeTexto("patata", "a"))
