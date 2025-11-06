// useParams nos da un objeto con los parámetros que tenga la URL
//https://dominio.com/editar/dsdhisuad
///editar/:id ---> { id:dsdhisuad }
import { useParams } from "react-router-dom";

const UpdateProductView = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>UpdateProductView</div>
  )
}

export default UpdateProductView
