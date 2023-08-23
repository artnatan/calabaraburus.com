import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

const PostNewPage = (user) => {

    const navigate = useNavigate()

    let [post, setPost] = useState(null)

    const createPost = async () => {
        let formField = new FormData()

        formField.append("theme", post.theme)
        formField.append("description", post.description)
        formField.append("img", post.img)
        formField.append("author_id", user.user['id'])


        await axios({
            method: "post",
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: "http://artnatan.github.io/calabaraburus.com/posts/create/",
            data: formField
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
        navigate("/posts");
    }

    return (
        <Container style={{ paddingTop: "100px" }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        // value={theme}
                        onChange={(e) => {
                            setPost({ ...post, "theme": e.target.value })
                        }}
                        placeholder="Theme of Post"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        style={{ height: '150px' }}
                        // value={description}
                        onChange={(e) => {
                            setPost({ ...post, "description": e.target.value })
                        }}
                        placeholder="Description of Post"
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
                        onClick={createPost}
                        variant="danger"
                        style={{ width: "100%" }}
                    >
                        CREATE
                    </Button>
                </Form.Group>
            </Form>

        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {})(PostNewPage)