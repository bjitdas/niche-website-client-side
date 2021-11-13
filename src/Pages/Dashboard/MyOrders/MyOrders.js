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

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are You Sure? You Want to Delete!!')
        if (proceed) {
            const url = `https://safe-cove-84199.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = myOrders.filter(product => product._id !== id);
                        setMyOrders(remaining)
                    }
                })
        }
    }

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
                                {myOrder.email === user.email && <tr>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.price}</td>
                                    <td><button onClick={() => handleCancelOrder(myOrder._id)} className="btn btn-secondary" >Cancel Order</button> </td>
                                </tr>}
                            </tbody>

                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;