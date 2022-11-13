// import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

import logo from '../img/emblemWhite.png'

export default function NaviBar() {

    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true)

    // const handleClose = () => setShow(false)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="d-inline-block align-center" alt="" height="50" width="50" />
                        {' '}Calabaraburus
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#about">About us</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link disabled> | </Nav.Link>
                            <Nav.Link>Things</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Button variant="outline-secondary" className="mr-2" onClick={handleShow}>Log In</Button>
                            {' '}
                            <Button variant="outline-secondary" onClick={handleShow}>Sign Out</Button>
                        </Form> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> */}

        </>
    )
}
