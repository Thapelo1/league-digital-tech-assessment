import React from 'react';

const TableBody = props => {

    const usersInfo = props.userData.map((user, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.days}</td>
                <td><button type="button" class="btn btn-danger" onClick={() => props.removeUser(index)}>Remove</button></td>
            </tr>
        )
    })

return <tbody>{usersInfo}</tbody>
}

export default TableBody;