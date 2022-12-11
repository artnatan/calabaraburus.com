import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import port from '../img/port.png';

const PostsList = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    let getPosts = async () => {
        let response = await fetch("http://localhost:8000/posts/")
        let data = await response.json()
        setPosts(data)
    }

    return (
        <Container>
            <div className="posts-list text-center" style={{ "paddingTop": "100px" }}>
                {posts.map((post, index) => (
                    <Row style={{ "paddingTop": "20px" }}>
                        <Col style={{ "background": "#696969", "paddingTop": "20px" }}>
                            <Image src={port} className="d-block w-100" />
                            <h2 key={index}>
                                <a href={"/posts/" + post.id} style={{textDecoration: "none", color: 'inherit'}}>{post.theme}</a>
                            </h2>
                            <p>{post.short_description}</p>
                        </Col>
                    </Row>
                ))}
            </div>
        </Container>
    )

}

export default PostsList