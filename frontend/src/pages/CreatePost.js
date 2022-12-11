import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'


const CreatePost = () => {

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

            <Form>
                <Form.Group controlId="form.Name">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control type="text" placeholder="Enter Theme of your Post" />
                </Form.Group>

                <Form.Group controlId="form.Textarea">
                    <Form.Label>Post</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        </Container>
    )
}

export default CreatePost