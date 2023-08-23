import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CommentUpdatePage = () => {

    const { post_id, id } = useParams()
    const navigate = useNavigate()

    let [comment, setComment] = useState([])


    useEffect(() => {
        getComment()
    }, [post_id, id])

    let getComment = async () => {
        let response = await fetch(`http://artnatan.github.io/calabaraburus.com/posts/${post_id}/comments/${id}/`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        })
        let data = await response.json()
        setComment(data)
    }

    const updateCommentInfo = async () => {
        let formField = new FormData()

        formField.append("text", comment.text)

        await axios({
            method: "patch",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: `http://artnatan.github.io/calabaraburus.com/posts/${post_id}/comments/${id}/update/`,
            data: formField
        })

        navigate(`/posts/${post_id}`)
    }

    const deleteComment = async () => {
        await axios({
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: `http://artnatan.github.io/calabaraburus.com/posts/${post_id}/comments/${id}/update`
        }).then((response) => {
            console.log(response.data)
        })
        navigate(`/posts/${post_id}`)
    }


    return (
        <Container style={{ paddingTop: "100px" }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        style={{ height: '150px' }}
                        onChange={(e) => {
                            setComment({ ...comment, "text": e.target.value })
                        }}
                        defaultValue={comment.text}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button
                        onClick={() => updateCommentInfo()}
                        variant="danger"
                        style={{ width: "90%" }}
                    >
                        UPDATE
                    </Button>
                    <Button
                        onClick={() => deleteComment()}
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

export default CommentUpdatePage