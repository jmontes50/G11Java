const Hijo2 = (props) => {
  console.log("Hijo2: ", props)
  return (
    <>
     <div>Valor de contador en hijo2: {props.contador}</div>
      <button onClick={props.accion}>
        Ejecutar
      </button>
      <hr/>
    </>
  )
}

export default Hijo2
