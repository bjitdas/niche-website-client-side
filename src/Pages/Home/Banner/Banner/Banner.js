import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../BannerImg/BannerImg';
import { useHistory } from 'react-router-dom';


const Banner = () => {
    const history = useHistory();

    const handleExplore = () => {
        history.push("/products")
    }

    return (
        <div className="" style={{ backgroundColor: '#E5E8E8', padding: '10px' }}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <BannerImg></BannerImg>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="my-5">
                            <h1 style={{ color: '#0E6251' }}>Get Started With <br />
                                <span>BikeBD</span>
                            </h1> <br />
                            <p style={{ color: '#34495E' }}>Experience Your Best</p>
                            <button onClick={handleExplore} type="button" className="btn px-5 fs-4" style={{ backgroundColor: '#0092A5', color: '#ffffff', fontWeight: 600, padding: '10px' }}>Explore All</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;