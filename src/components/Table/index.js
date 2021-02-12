import React from 'react';

function Table(props) {
    const { results } = props

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">
                        <button type="button">
                            Name
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button">
                            Date of Birth
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button">
                            Email
                        </button>
                    </th>
                    <th scope="col">
                        <button type="button">
                            Phone
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {results?.map((result, index) => (
                    <TableBody result={result} index={index} />
                ))}
            </tbody>
        </table>
    )
}

export default Table;