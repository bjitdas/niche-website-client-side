import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;


    return (
        <div>
            <Col>
                <Card style={{ backgroundColor: '#48C9B0' }}>
                    <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}...
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 600 }}>
                            Price: ${price}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>

                            <button className="btn btn-danger rounded"><span className="text-light fs-4"><BsFillCartPlusFill /> </span>Purchase Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;