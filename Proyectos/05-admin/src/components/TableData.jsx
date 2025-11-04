/**
 * <TableData data={products} headers={headersData} />
 * props = {
 *   data: [], //con el arreglo de productos
 *   headers: [{ name: "nombre", label: "Nombre producto" }, ...]
 * }
 */

const TableData = (props) => {
  //data seran los productos
  const { data, headers } = props;

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
        {data.map((item) => (
          <tr key={item.id}>
            {/* En vez de indicar que propiedades mostrar podemos hacerlo más flexible
            <td>{item.id}</td>
            <td>{item.nombre}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
