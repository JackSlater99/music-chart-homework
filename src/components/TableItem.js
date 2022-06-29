import React from 'react';

const TableItem = ({song, position}) => {
    return (
        <tr>
            <td className="position">{position}</td>
            <td>{song["im:name"]["label"]}</td>
            <td>{song["im:artist"]["label"]}</td>
        </tr>
    )
}


export default TableItem