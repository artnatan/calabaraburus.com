import React from 'react';
import { Container, CardGroup, Card, Stack } from 'react-bootstrap';


export function AboutUs(props) {

    return (
        <>

            <Container>

                <Stack gap={2} className="col-md-5 mx-auto">
                    <h1 className=" text-center" style={{ "font-weight": "bold" }}>About us</h1>
                    <p style={{ "paddingTop": "100px" }}>For years in our spare time
                        we have been developing games, write stories about hedgehogs,
                        craft and just fight evil...
                    </p>

                </Stack>
            </Container>

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

        </>
    )
}