import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import parse from 'html-react-parser';


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

    const DownloadButtom = () => {
        if (project.name === "Naumachia") {
            return (
                <div style={{ "paddingTop": "50px" }}>
                    <Button
                        href="https://play.google.com/store/apps/details?id=com.Calabaraburus.Naumachia"
                        variant="outline-secondary"
                        style={{ "width": "200px" }}>
                        Download
                    </Button>
                </div>)
        } if (project.name === "FubCub") {
            return (
                <div style={{ "paddingTop": "50px" }}>
                    <Button
                        href="https://opensea.io/calabaraburus"
                        variant="outline-secondary"
                        style={{ "width": "200px" }}>
                        Download
                    </Button>
                </div>)
        } else {
            return (
                <div style={{ "paddingTop": "50px" }}>
                    <h2>In developing</h2>
                </div>)
        }
    }

    return (
        <Container>
            <div style={{ "paddingTop": "100px" }}>
                <>

                    <Row style={{ borderColor: "white" }}>
                        <Col className="text-center col-6">
                            <img alt="img_game" src={project.img} style={{ width: "100%" }} />
                        </Col>
                        <Col>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <h1 className="text-center">{project.name}</h1>
                                <p style={{ textAlign: "justify" }}>{parse(project.description)}</p>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            {DownloadButtom()}

                        </Col>

                    </Row>
                </>
            </div>
        </Container>
    )
}

export default ProjectPage