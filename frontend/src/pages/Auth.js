import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'


function Auth() {

    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true)

    // const handleClose = () => setShow(false)

    return (
        <Container>
            <div style={{ "paddingTop": "100px" }} id="authentication">
                <Row>
                    <Col className="col-4" style={{ "background": "#696969", "border-radius": "20px" }}>

                        <h4 style={{ "color": "white", "paddingTop": "10px" }}>
                            I AM ALREADY REGISTERED
                        </h4>
                        <hr />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ "color": "white" }}>Log in with your email address and password</Form.Label>
                                <Form.Control type="email" placeholder="Your email address" />
                                {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Your password" />
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                LOGIN
                            </Button>
                        </Form>
                        <div style={{ "paddingBottom": "10px" }}></div>

                    </Col>
                    <Col className="col-1"></Col>
                    <Col style={{ "background": "#696969", "border-radius": "20px" }}>

                        <h4 style={{ "color": "white", "paddingTop": "10px" }}>
                            I AM ALREADY REGISTERED
                        </h4>
                        <hr />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ "color": "white" }}>Log in with your email address and password</Form.Label>
                                <Form.Control type="email" placeholder="Your email address" />
                                {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Your password" />
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                LOGIN
                            </Button>
                        </Form>
                        <div style={{ "paddingBottom": "10px" }}></div>

                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default Auth;