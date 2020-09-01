import React from 'react';
import { Link } from 'react-router-dom';

function DisplayTable(props) {
  const dataTable = (data) => {
    return (
      <table className="table">
        <tbody>
          <tr>
            {data.columns.map((column) => (
              <th scope="col" key={column.name}>
                {column.header}
              </th>
            ))}
          </tr>
        </tbody>

        <tbody>
          {data.data.length > 0 ? (
            data.data.map((items) => (
              <tr key={items.id}>
                {data.columns.map((columnName) => (
                  <td key={columnName.name}>
                    {!items[columnName.name] ? (
                      <Link to={`${data.url}${items.id}`}> Edit </Link>
                    ) : (
                      items[columnName.name]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            // <span>nothing</span>
            <tr>
              <td>No products yet, please add a new product</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };

  return dataTable(props);
}

export default DisplayTable;
