import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import port from '../img/port.png';

const PostPage = () => {

    const { id } = useParams()

    let [post, setPost] = useState([])

    useEffect(() => {
        getPost()
    }, [id])

    let getPost = async () => {
        let response = await fetch(`http://localhost:8000/posts/${id}`)
        let data = await response.json()
        setPost(data)
    }

    return (
        <Container>
            <div style={{ "paddingTop": "100px" }}>
                <Row>
                    <Col className="col" style={{ "background": "#696969", "border-radius": "20px" }}>
                        <div style={{ "paddingTop": "10px" }}>
                            <Image src={port} className="d-block w-100 rounded-top" />
                        </div>

                        <h4 style={{ "font-weight": "bold", "paddingTop": "10px" }}>
                            {post.theme}
                        </h4>
                        <p>{post.description}</p>
                        <div style={{ "paddingBottom": "10px" }}></div>

                    </Col>

                </Row>

            </div>
        </Container>
    )
}

export default PostPage