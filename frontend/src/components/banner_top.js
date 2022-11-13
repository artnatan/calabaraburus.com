import React from 'react';
import { Carousel } from 'react-bootstrap';

import port from '../img/port.png';

export default function BannerTop() {

    return (
        <Carousel style={{"paddingTop": "75px"}}>
            <Carousel.Item style={{"height":  "700px"}}>
                <img src={port} className="d-block w-100" alt="First slide" />
            </Carousel.Item>

        </Carousel>
    )
}
