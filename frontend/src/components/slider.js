import React from 'react';
import { Carousel, Image } from 'react-bootstrap';


export default function Slider(props) {

    return (
        <Carousel style={{ paddingTop: "75px" }}>

            <Carousel.Item>
                <Image src={props.slide_1} className="d-block w-100" alt="First slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={props.slide_2} className="d-block w-100" alt="Second slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={props.slide_3} className="d-block w-100" alt="Third slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={props.slide_4} className="d-block w-100" alt="Fourth slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
