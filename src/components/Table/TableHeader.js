import React from 'react';

const TableHeader = props => {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Total days</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
    )
}

export default TableHeader;