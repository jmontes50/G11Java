//no solamente un componente actualizará de nuevo cuando cambien el state también cuando acaben los props
const Hijo1 = (props) => {

  return (
    <h2>
      Valor de contador: {props.contador}
    </h2>
  )
}

export default Hijo1
