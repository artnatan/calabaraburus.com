import React from 'react';
import { Container, Stack, Col, Row } from 'react-bootstrap';



export default function GetContacts() {

    return (


        <Container>

            <Stack gap={2} className="col-md-5 mx-auto text-center">
                <h1 style={{ "fontWeight": "bold" }}>Contact</h1>
            </Stack>

            <Row style={{ "paddingTop": "100px" }} className="col-md-5 mx-auto text-center">
                <Col>
                    <p className="text-start" style={{ "fontWight": "bold" }}>CALABARABURUS LAB</p>
                    <p className="text-start" style={{ "fontWeight": "bold" }}>UKRAINE</p>
                </Col>
                <Col className="text-center" style={{ "color": "#feb236" }}>
                    <p>DEV@CALABARABURUS.COM</p>
                    <p>OFFICE@CALABARABURUS.COM</p>
                </Col>

            </Row>

        </Container>


    )
}