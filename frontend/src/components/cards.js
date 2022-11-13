import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import sword from '../img/sword_2.png';
import hedgehog from '../img/ezch.png';
import city from '../img/city.png';

export default function Cards() {

    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sword} />
                        <Card.Body>
                            <Card.Title>Battle 2</Card.Title>
                            <Card.Text>Blast mobile game</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hedgehog} />
                        <Card.Body>
                            <Card.Title>Story about hedgehogs</Card.Title>
                            <Card.Text>A long time ago, in a forest far, far away...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={city} />
                        <Card.Body>
                            <Card.Title>New shooter</Card.Title>
                            <Card.Text>Wild Wild West</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}