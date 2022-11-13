import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function Slider(props) {

    return (
        <Carousel style={{"paddingTop": "75px"}}>
            
            <Carousel.Item style={{"height":  "700px"}}>
                <img src={props.slide_1} className="rounded mx-auto d-block" alt="First slide" style={{"height":  "700px"}} />
                <Carousel.Caption>
                    {/* <h2>Naumachia</h2>
                    <p>mobile game</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{"height":  "700px"}}>
                <img src={props.slide_2} className="rounded mx-auto d-block" alt="Second slide" style={{"height":  "700px"}} />
                <Carousel.Caption>
                    {/* <h2>NFT FubCub</h2>
                    <p>limited edition</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{"height":  "700px"}}>
                <img src={props.slide_3} className="rounded mx-auto d-block" alt="Third slide" style={{"height":  "700px"}} />
                <Carousel.Caption>
                    {/* <h2>SOON</h2>
                    <p>new mobile shooooter</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{"height":  "700px"}}>
                <img src={props.slide_4} className="rounded mx-auto d-block" alt="Fourth slide" style={{"height":  "700px"}} />
                <Carousel.Caption>
                    {/* <h2>SOON</h2>
                    <p>new mobile shooooter</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
