import React from 'react';
import { Card, Container, CardGroup, Stack } from 'react-bootstrap';

export function Projects(props) {

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

                <Card border="light" style={{ background: "#333", "border-radius": "0px" }}>
                    <Card.Link href="/products/3" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Card.Img variant="top" src={props.project_1} />
                        <Card.Body className="text-center">
                            <Card.Title>Battle 2</Card.Title>
                            <Card.Text>Blast mobile game about strong life of Bears</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>


                <Card border="light" style={{ background: "#333", "border-radius": "0px" }}>
                    <Card.Link href="/products/4" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Card.Img variant="top" src={props.project_2} />
                        <Card.Body className="text-center">
                            <Card.Title>Story about hedgehogs</Card.Title>
                            <Card.Text>A long time ago, in a forest far, far away...</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>


                <Card border="light" style={{ background: "#333", "border-radius": "0px" }}>
                    <Card.Link href="/products/5" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Card.Img variant="top" src={props.project_3} />
                        <Card.Body className="text-center">
                            <Card.Title>Piu Piu</Card.Title>
                            <Card.Text>Wild West... wild manners... wild resolutions...</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card border="light" style={{ background: "#333", "border-radius": "0px" }}>
                    <Card.Link href="/products/2" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Card.Img variant="top" src={props.project_4} />
                        <Card.Body className="text-center">
                            <Card.Title>FubCub</Card.Title>
                            <Card.Text>NFT limited edition cube football players</Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>

                <Card border="light" style={{ background: "#333", "border-radius": "0px" }}>
                    <Card.Link href="/products/1" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Card.Img variant="top" src={props.project_5} />
                        <Card.Body className="text-center">
                            <Card.Title>Naumachia</Card.Title>
                            <Card.Text>Naumachia is a ships battle arena.</Card.Text>
                        </Card.Body>
                    </Card.Link>

                </Card>


            </CardGroup>


        </Container>


    )
}