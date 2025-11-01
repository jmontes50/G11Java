//JSX -> Javascript eXtension
//6. cuando hacemos imports si es un archivo de .js o .jsx no es necesario añadirle la extension en la ruta del import
import Parrafo from "./components/Parrafo";

//1. la función que hace de componente tiene que llamarse iniciando con Mayús ej. App, Card, Formulario, Tarjeta
function App () {
  const titulo = "Hola soy un String de JS";
  const miTexto = "Otros textos para estudiantes";
  //2. su return tiene que retornar JSX/HTML para indicar que se va a visualizar
  //2.1 el return del JSX/HTML se restringe a 01 elemento
  //2.2 algo que se puede hacer en caso no deseemos envolver el JSX en un 01 elemento es usar Fragment <></>
  return <>
    {/* 2.1.1 adentro ya podemos colocar los elementos que deseemos */}
    {/* 5. si queremos interpolar/usar JS dentro de JSX/HTML tenemos que usar {} */}
    <h1>{titulo}</h1>
    <h2>Main Component {100 + 400}</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    {/* si deseamos usar un componente lo llamamos por su nombre pero con la sintaxis de HTML */}
    {/* si queremos usar props, vamos a indicarlos en forma de atributos */}
    <Parrafo texto="Hola!" texto2="Sushi" numero="10" />
    <Parrafo texto={miTexto} texto2="lorem..." numero={100}/>
    <Parrafo />
    <Parrafo />
    {/* 4. Toda etiqueta debe estar cerrada, con una etiqueta de cierre o un autocierre <img /><input /> */}
    <hr />
    {/* Algunos atributos cambian su nombre */}
    {/* class ==> className
        for = htmlFor
    */}
    <div className="importante">Soy un Div</div>
    <label htmlFor="entrada">Nombre</label>
    <input type="text" placeholder="Nombre" id="entrada" />
  </>
}

//3ero la función que hace de componente tiene que ser exportada
export default App;
