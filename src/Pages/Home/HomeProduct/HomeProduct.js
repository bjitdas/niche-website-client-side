import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";

const HomeProducts = ({ product }) => {
    const { _id, name, img, description, price } = product;

    return (
        <div>
            <Col>
                <Card style={{ backgroundColor: '#F7DC6F' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 600 }}>
                            Price: ${price}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>

                            <button className="btn btn-primary rounded"><span className="text-light fs-4"><BsFillCartPlusFill /> </span>Purchase Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeProducts;