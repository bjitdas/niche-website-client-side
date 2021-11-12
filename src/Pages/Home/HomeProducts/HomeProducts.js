import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    return (
        <div className="my-5 py-5" style={{ backgroundColor: '#2E4053' }}>
            <Container>
                <h1 className="pb-2 text-light"> Our Special Products</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProducts;