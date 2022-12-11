import React from 'react';
import { Container, Stack, Button, Image } from 'react-bootstrap';
import NaumachiaText from '../img/NaumahiaText.png';

export default function TopProject() {
    return (
        <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Image src={NaumachiaText} className="d-block w-100" alt="First slide" />
                {/* <h1 className="text-center">Naumachia</h1> */}
                <p style={{"paddingTop": "50px"}}>Naumachia is a battle arena where ships
                    fight like ancient gladiators in the Colosseum.
                    Choose a warship and join an exciting sea battle with your opponent.
                </p>
                <div className="text-center" style={{"paddingTop": "50px"}}>
                    <Button variant="outline-secondary" style={{"width": "140px"}}>Download</Button>
                </div>
            </Stack>
        </Container>
    )
}
