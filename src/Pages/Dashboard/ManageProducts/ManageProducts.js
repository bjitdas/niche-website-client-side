import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-cove-84199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? You want to delete!!')
        if (proceed) {
            const url = `https://safe-cove-84199.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }
    }

    return (
        <div>
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
                        products.map(product =>
                            <tbody
                                key={product._id}>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td> <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete Product</button> </td>
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default ManageProducts;