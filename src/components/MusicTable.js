import React from 'react'
import TableItem from './TableItem'

const MusicTable = ({ songs }) => {

    const top20 = songs.map((song, index) => {
        return <TableItem song={song} key={index} position={index + 1} />
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {top20}
                </tbody>

            </table>
        </>
    )
}
export default MusicTable