import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [shippping, setShipping] = useState('Pending')

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleShipping = () => {
        setShipping('Shipped')
    }

    return (
        <div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody

                                key={order._id}>
                                <tr>
                                    <td>{order.customerName}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.price}</td>
                                    <td><button onClick={handleShipping} className="">{shippping}</button></td>
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default ManageOrders;