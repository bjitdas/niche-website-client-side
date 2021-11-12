import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

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
                                    <td><button type="submit">Cancel Order</button> </td>
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;