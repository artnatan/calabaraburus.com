import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import castle_2 from '../img/castle_2.png';

const ProjectPage = () => {

    const { id } = useParams()

    let [project, setProject] = useState([])

    useEffect(() => {
        getProject()
    }, [id])

    let getProject = async () => {
        let response = await fetch(`http://localhost:8000/products/${id}/`)
        let data = await response.json()
        setProject(data)
    }

    return (
        <Container>
            <div style={{ "paddingTop": "100px" }}>
                <>

                    <Row>
                        <Col className="text-center">
                            <img alt="img_game" src={castle_2} style={{ "width": "400px" }} />
                        </Col>
                        <Col>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <h1 className="text-center">{project.name}</h1>
                                <p>{project.description}</p>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <div style={{ "paddingTop": "50px" }}>
                                <Button variant="outline-secondary" style={{"width": "200px"}}>Download</Button>
                            </div>

                        </Col>

                    </Row>
                </>
            </div>
        </Container>
    )
}

export default ProjectPage