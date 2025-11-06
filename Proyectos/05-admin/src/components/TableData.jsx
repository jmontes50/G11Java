/**
 * <TableData data={products} headers={headersData} />
 * props = {
 *   data: [], //con el arreglo de productos
 *   headers: [{ name: "nombre", label: "Nombre producto" }, ...]
 * }
 */

const TableData = (props) => {
  //data seran los productos
  const { data, headers, actions } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((head, index) => (
            <th key={index}>{ head.label }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* iteración 1, por c/prod */}
        {data.map((item) => (
          <tr key={item.id}>
            {/* En vez de indicar que propiedades mostrar podemos hacerlo más flexible
            <td>{item.id}</td>
            <td>{item.nombre}</td> */}
            {/* iteración 2, haciendo match con las propiedades de c/prod */}
            {headers.map((head, index) => (
              <td key={index}>
                {/* {item[head.name]} */}
                {/* en caso de no tener pipe me dara undefined, que es falsy */}
                {head.pipe ? (head.pipe(item[head.name])) : item[head.name]}
              </td>
            ))}
            {/* Por cada fila vamos a agregar una columnas con las acciones posibles */}
            {actions.map((act, index) => (
              <td key={index}>
                {/* item representa el producto y llegara al callback info en actions en HomeView */}
                {act.content(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
