import React from 'react';
import { Container, CardGroup, Card, Stack } from 'react-bootstrap';

// import dom from '../img/dom_1.png';
// import island from '../img/island_1.png';
// import car from '../img/car_2.png';


export default function GetInfoAbout(props) {

    return (


        <Container>

            <Stack gap={2} className="col-md-5 mx-auto">
                <h1 className=" text-center" style={{ "font-weight": "bold" }}>About us</h1>
                <p style={{ "paddingTop": "100px" }}>For years in our spare time
                    we have been developing games, write stories about hedgehogs,
                    craft and just fight evil...
                </p>

            </Stack>


            <CardGroup style={{ "paddingTop": "20px", "weight": "1200px" }}>
                <Card>
                    <Card.Img src={props.slide_1} variant="top" />
                </Card>
                <Card>
                    <Card.Img src={props.slide_2} variant="top" />
                </Card>
                <Card>
                    <Card.Img src={props.slide_3} variant="top" />
                </Card>
            </CardGroup>

            

        </Container>


    )
}