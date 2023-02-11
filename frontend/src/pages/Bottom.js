import React from 'react';
import { Container, Row, Col, Image, NavLink } from 'react-bootstrap';
import Insta from '../icons/instagram.svg'
import Fb from '../icons/facebook.svg'
import Patreon from '../icons/patreon.svg'


export function Bottom() {

    return (


        <Container>
            <hr />
            <Row style={{ padding: "20px" }} className="col-md-5 mx-auto text-center">
                <Col>
                    <NavLink href="https://www.instagram.com/calabaraburus.games/" className="add-icon">
                        <Image src={Insta} style={{ width: "50px" }} />
                    </NavLink>
                </Col>
                <Col>
                    <NavLink href="https://www.facebook.com/calabaraburus/" className="add-icon">
                        <Image src={Fb} style={{ width: "50px" }} />
                    </NavLink>
                </Col>
                <Col>
                    <NavLink href="https://www.patreon.com/calabaraburus/" className="add-icon">
                        <Image src={Patreon} style={{ width: "50px" }} />
                    </NavLink>
                </Col>
            </Row>

        </Container>


    )
}