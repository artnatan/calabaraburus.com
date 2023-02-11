import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PostUpdatePage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    let [post, setPost] = useState([])


    useEffect(() => {
        getPost()
    }, [id])

    let getPost = async () => {
        let response = await fetch(`http://localhost:8000/posts/${id}/`)
        let data = await response.json()
        setPost(data)
    }

    const updatePostInfo = async () => {
        let formField = new FormData()

        formField.append("theme", post.theme)
        formField.append("description", post.description)
        formField.append("img", post.img)

        await axios({
            method: "patch",
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: `http://localhost:8000/posts/${id}/update/`,
            data: formField
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })

        navigate("/posts/update")
    }

    const deletePost = async () => {
        await axios({
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: `http://localhost:8000/posts/${id}/update/`       
        })
        navigate("/posts/update")
    }

    return (
        <Container style={{ paddingTop: "100px" }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        onChange={(e) => {
                            setPost({ ...post, "theme": e.target.value })
                        }}
                        defaultValue={post.theme}
                        placeholder="Theme of Post"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        style={{ height: '150px' }}
                        onChange={(e) => {
                            setPost({ ...post, "description": e.target.value })
                        }}
                        defaultValue={post.description}
                    />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                        type="file"
                        method="post"
                        enctype="multipart/form-data"
                        accept="image/jpeg,image/png,image/gif"
                        onChange={(e) => {
                            setPost({ ...post, "img": e.target.files[0] })
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button
                        onClick={() => updatePostInfo()}
                        variant="danger"
                        style={{ width: "90%" }}
                    >
                        UPDATE
                    </Button>
                    <Button
                        onClick={() => deletePost()}
                        variant="secondary"
                        style={{ width: "10%" }}
                    >
                        DELETE
                    </Button>
                </Form.Group>
            </Form>

        </Container>
    )
}

export default PostUpdatePage