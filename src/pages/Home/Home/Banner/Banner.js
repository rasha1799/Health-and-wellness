import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/adfsd_n.jpg'
import banner2 from '../../../../images/brooke-lark-nTZOILVZuOg-unsplash.jpg'
import banner3 from '../../../../images/istockphoto-1255236230-170667a.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Stay Hungry,Stay Foolish</h3>
                        <p>To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Physical fitness is the first requisite of happiness</h3>
                        <p>To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong and clear</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>It is health that is the real wealth, and not pieces of gold and silver.</h3>
                        <p>The doctor of the future will give no medicine, but will instruct his patients in care of the human frame, in diet, and in the cause and prevention of disease.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;