/**
 * <TableData data={products} />
 * props = {
 *   data: [] //con el arreglo de productos
 * }
 */

const TableData = (props) => {
  //data seran los productos
  const { data } = props;

  return (
    <table className="table">

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
