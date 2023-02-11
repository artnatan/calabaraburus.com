import React, { Fragment } from 'react';
import { Nav, Navbar, Container, Image, Button } from 'react-bootstrap';
import { logout } from '../pages/actions/auth';
import { connect } from 'react-redux';

import logo from '../img/emblemWhite.png';
import Insta from '../icons/instagram.svg'
import Fb from '../icons/facebook.svg'
import Patreon from '../icons/patreon.svg'


const NaviBar = ({ logout, isAuthenticated }) => {

    const guestLinks = () => (
        <Fragment>
            <Button
                href="/login"
                variant="outline-secondary"
                className="mr-2"
                type="submit">Log In</Button>
        </Fragment>
    )

    const authLinks = () => (
        <Button
            href="/"
            variant="outline-secondary"
            className="mr-2"
            type="submit"
            onClick={logout}>Log Out</Button>
    )

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/#home">
                        <Image src={logo} className="d-inline-block align-center" alt="" height="50" width="50" />
                        {' '}Calabaraburus
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="http://localhost:3000/#projects">Projects</Nav.Link>
                            <Nav.Link href="http://localhost:3000/#about">About us</Nav.Link>
                            <Nav.Link href="http://localhost:3000/#contact">Contact</Nav.Link>
                            <Nav.Link disabled> | </Nav.Link>
                            <Nav.Link href="/posts">Thoughts</Nav.Link>
                        </Nav>

                        <Nav className="mr-auto">
                            <Nav.Link href="https://www.instagram.com/calabaraburus.games/" className="add-icon">
                                <Image src={Insta} style={{ width: "25px" }} />
                            </Nav.Link>
                            <Nav.Link href="https://www.facebook.com/calabaraburus/" className="add-icon">
                                <Image src={Fb} style={{ width: "25px" }} />
                            </Nav.Link>
                            <Nav.Link href="https://www.patreon.com/calabaraburus/" className="add-icon">
                                <Image src={Patreon} style={{ width: "25px" }} />
                            </Nav.Link>
                            <Nav.Link disabled> | </Nav.Link>
                        </Nav>
                        
                        {isAuthenticated ? authLinks() : guestLinks()}


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(NaviBar)