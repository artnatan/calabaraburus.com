import React from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import Piu from '../img/piu.png';

export default function SoonProject() {
    return (
        <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
                <p className="text-center" style={{"font-size": "100px", "font-weight": "bold"}}>SOON</p>
                <img src={Piu} className="d-block w-100" alt="piu" style={{ "paddingTop": "50px" }} />
                <p style={{ "paddingTop": "50px" }}>Dirty Billy is a menace of peaceful towns
                    and trading stagecoaches, with his six-shot revolver of the largest caliber
                    that can only be found in the expanses from the frontier to the coast.
                    Well, how is such a lucky son of a bitch without companions, a couple of three
                    desperate thugs, ready to break more than one skull for a gold coin and a glass of whiskey.
                    The player will have to stand up for a small town and its civilians
                </p>
                <div className="text-center" style={{ "paddingTop": "50px" }}>
                    <Button variant="outline-secondary" style={{ "width": "140px" }}>See teaser</Button>
                </div>
            </Stack>
        </Container>
    )
}
