import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import parser from 'html-react-parser'
import CommentsPage from './CommentsPage';

const PostPage = () => {

    const { id } = useParams()

    let [post, setPost] = useState([])

    useEffect(() => {
        getPost()
    }, [id])

    let getPost = async () => {
        let response = await fetch(`http://artnatan.github.io/calabaraburus.com/posts/${id}`)
        let data = await response.json()
        setPost(data)
    }

    return (
        <Container>
            <div style={{ "paddingTop": "100px" }}>
                <Row>
                    <Col className="col" style={{ background: "#696969", borderRadius: "20px" }}>
                        <div style={{ paddingTop: "10px" }}>
                            <Image src={post.img} className="d-block w-100 rounded-top" style={{maxHeight: "500px", objectFit: "contain"}} />
                        </div>

                        <h4 style={{ fontWeight: "bold", paddingTop: "10px", textAlign: "center" }}>
                            {post.theme}
                        </h4>
                        {/* <div>{post.description}</div> */}
                        {/* <div dangerouslySetInnerHTML={{ __html: post.description}} /> */}
                        <div>{post.description}</div>
                        <div style={{ "paddingBottom": "10px" }}></div>

                    </Col>

                </Row>

            </div>

            <CommentsPage post_id={id} />

        </Container>
    )
}

export default PostPage