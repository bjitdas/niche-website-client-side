import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/Banner1.jpg'
import banner2 from '../../../../images/Banner2.jpg'
import banner3 from '../../../../images/Banner3.jpg'

const BannerImg = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: '400px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{ height: '400px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '400px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerImg;