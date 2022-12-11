import React, { useState, useEffect } from 'react'
import { Container, CardGroup, Card } from 'react-bootstrap';
import port from '../img/port.png';

const ProjectsList = () => {

    let [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    let getProjects = async () => {
        let response = await fetch("http://localhost:8000/products/")
        let data = await response.json()
        setProjects(data)
    }

    return (
        <Container>
            <div className="projects-list text-center" style={{ "paddingTop": "100px" }}>
                <CardGroup>
                    {projects.map((project, index) => (
                        <Card key={index} border="light" style={{ background: "#333", "border-radius": "0px" }}>
                            <Card.Link href={"/products/" + project.id} style={{ textDecoration: "none", color: 'inherit' }}>
                                <Card.Img variant="top" src={port} />
                                <Card.Body className="text-center">
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.short_description}</Card.Text>
                                </Card.Body>
                                {/* <Col href={"/products/" + project.id} style={{ "background": "#696969", "paddingTop": "20px" }}>
                                    <Image src={port} className="d-block w-100" />
                                    <h2 key={index}>{project.name}</h2>
                                    <p>{project.short_description}</p>
                                </Col> */}
                            </Card.Link>
                        </Card>
                    ))}
                </CardGroup>
            </div>
        </Container>
    )
}

export default ProjectsList