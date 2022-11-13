import React from 'react';
import { Button, Card, Container, CardGroup, Stack } from 'react-bootstrap';

// import sword from '../img/sword_2.png';
// import hedgehog from '../img/ezch.png';
// import piu from '../img/piu_1.png';
// import jonka from '../img/jonka.png';
// import fan from '../img/cubeguys_footballer_10.png';

export default function Cards(props) {

    return (


        <Container>

            <Stack gap={2} className="col-md-5 mx-auto">
                <h1 className=" text-center" style={{ "font-weight": "bold" }}>Our projects</h1>
                <p style={{ "paddingTop": "100px" }}>For years in our spare time
                    we have been developing games, write stories about hedgehogs,
                    craft and just fight evil...
                </p>

            </Stack>

            <CardGroup style={{ "paddingTop": "20px" }}>

                <Card border="light" style={{ background: "#333" }}>
                    <Card.Img variant="top" src={props.project_1} />
                    <Card.Body className="text-center">
                        <Card.Title>Battle 2</Card.Title>
                        <Card.Text>Blast mobile game about strong life of Bears</Card.Text>
                        <Button variant="outline-secondary">Learn more</Button>
                    </Card.Body>
                </Card>


                <Card border="light" style={{ background: "#333" }}>
                    <Card.Img variant="top" src={props.project_2} />
                    <Card.Body className="text-center">
                        <Card.Title>Story about hedgehogs</Card.Title>
                        <Card.Text>A long time ago, in a forest far, far away...</Card.Text>
                        <Button variant="outline-secondary">Learn more</Button>
                    </Card.Body>
                </Card>


                <Card border="light" style={{ background: "#333" }}>
                    <Card.Img variant="top" src={props.project_3} />
                    <Card.Body className="text-center">
                        <Card.Title>Piu Piu</Card.Title>
                        <Card.Text>Wild West... wild manners... wild resolutions...</Card.Text>
                        <Button variant="outline-secondary">Learn more</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card border="light" style={{ background: "#333" }}>
                    <Card.Img variant="top" src={props.project_4} />
                    <Card.Body className="text-center">
                        <Card.Title>FubCub</Card.Title>
                        <Card.Text>NFT limited edition cube football players</Card.Text>
                        <Button variant="outline-secondary">Learn more</Button>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ background: "#333" }}>
                    <Card.Img variant="top" src={props.project_5} />
                    <Card.Body className="text-center">
                        <Card.Title>Naumachia</Card.Title>
                        <Card.Text>Naumachia is a ships battle arena.</Card.Text>
                        <Button variant="outline-secondary">Learn more</Button>
                    </Card.Body>
                </Card>


            </CardGroup>


            {/* <Figure>
                <Figure.Image
                    style={{"width": "33.33%"}}
                    alt="naumachia"
                    src={jonka}
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure> */}

        </Container>


    )
}