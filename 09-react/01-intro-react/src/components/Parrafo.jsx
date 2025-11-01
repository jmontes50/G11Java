const Parrafo = (props) => {
  console.log(props);
  const { texto, texto2, numero } = props;
  //si queremos dar estilos inline a un elemento tenemos que usar JS
  //usamos {{}} la 1era para indicar JS la 2da para tener un objeto
  return <p style={{padding: "10px", border: "2px solid red"}}>
    {texto} - {numero}
  </p>
}

export default Parrafo
