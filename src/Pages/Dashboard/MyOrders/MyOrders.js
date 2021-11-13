import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://safe-cove-84199.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    return (
        <div>
            <h3 className="m-4 text-danger">Hi {user?.displayName.split(" ")[0]}! <br /> Your Orders:</h3>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {
                        myOrders.map(myOrder =>
                            <tbody

                                key={myOrder._id}>
                                <tr>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.price}</td>
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