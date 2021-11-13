import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-cove-84199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="py-5" style={{ backgroundColor: '#99A3A4 ' }}>
            <Container>
                <h1 style={{ fontWeight: 700, color: '#DC7633 ' }} className="p-3 bg-secondary"> Our All Products</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;

// https://i.ibb.co/swgW7yX/exploits-u5.jpg
// https://i.ibb.co/qWx91sV/walton-viper.jpg
// https://i.ibb.co/ww1y0qc/hero-gia.jpg
// https://i.ibb.co/QkM6c9j/bajaj-dixcover.jpg
// https://i.ibb.co/YLLmTYj/yamaha-r15.jpg
// https://i.ibb.co/3FyNvkM/tvs-apache-rtr.jpg
// https://i.ibb.co/qM71dbW/hoda.jpg
// https://i.ibb.co/D5Rv4cb/bajaj-platina-webp.webp
// https://i.ibb.co/2yGKmY1/hero-hondjpg.jpg
// https://i.ibb.co/JjZqJGQ/tvs-raider.webp
// https://i.ibb.co/8dPhJ17/01-yellow.png
// https://i.ibb.co/Fwf8HCW/bajaj-pulsar.jpg