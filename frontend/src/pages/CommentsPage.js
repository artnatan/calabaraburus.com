import React, { useState, useEffect, Fragment } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoMdCreate as EditEl } from 'react-icons/io';
import axios from 'axios';

const CommentsPage = ({ isAuthenticated, user }) => {

    const { id } = useParams()

    let [comments, setComments] = useState([])
    const [text, setText] = useState("")
    // const [replyComment, setReplyComment] = useState("")
    // const [isOpen, setIsOpen] = useState("");

    useEffect(() => {
        getComments()
    }, [id])

    let getComments = async () => {
        let response = await fetch(`http://artnatan.github.io/calabaraburus.com/posts/${id}/comments`)
        let data = await response.json()
        setComments(data)
    }

    const createComment = async () => {
        let formField = new FormData()

        formField.append("text", text)
        // formField.append("reply_comment", replyComment)
        // formField.append("user", user['id'])

        await axios({
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            },
            url: `http://artnatan.github.io/calabaraburus.com//posts/${id}/comments/create/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            getComments()
        })
    }

    // const updateCommentInfo = async () => {
    //     let formField = new FormData()

    //     formField.append("text", text)

    //     await axios({
    //         method: "patch",
    //         url: `http://localhost:8000/posts/${props.post_id}/comments/${id}/update`,
    //         data: formField
    //     }).then((response) => {
    //         console.log(response.data);
    //     })
    // }

    // const deleteComment = async () => {
    //     await axios.delete(`http://localhost:8000/posts/${props.post_id}/comments/${id}/update`)
    // }

    const guestPanelEd = () => (
        <Fragment>

        </Fragment>
    )

    const authPanelEd = (comment_id) => (
        // <EditEl onClick={() => setIsOpen(id)} />
        // <EditEl href={"posts/"+ props.post_id + "/comments/" + id + "/update"} />
        <Link to={"comments/" + comment_id + "/update"}>
            <EditEl />
        </Link>
    )


    function getCommentContent(comment, index) {

        if (user === null) {
            return (<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>

                <Row style={{ paddingTop: "20px" }}>
                    <Col style={{ background: "#FFFFFF", borderRadius: "20px", paddingTop: "20px" }}>
                        <p key={index} style={{ color: "black" }}>{comment.text}</p>
                    </Col>
                </Row>
            </div>)
        } else {
            return (<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>

                <Row style={{ paddingTop: "20px" }}>
                    <Col style={{ background: "#FFFFFF", borderRadius: "20px", paddingTop: "20px" }}>
                        <p key={index} style={{ color: "black" }}>{comment.text}</p>
                    </Col>
                    <Col className="col-1">
                        {authPanelEd(comment.id)}
                    </Col>
                </Row>
            </div>)
        }
    }

    const guestLinks = () => (
        <Fragment>
            <p2>To comment, please login</p2>
        </Fragment>
    )

    const authLinks = () => (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    as="textarea"
                    style={{ height: '150px' }}
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)
                    }

                    placeholder="Text"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Button
                    onClick={() => createComment()}
                    variant="danger"
                    style={{ width: "100%" }}
                >
                    COMMENT
                </Button>
            </Form.Group>
        </Form>
    )

    return (
        <Container style={{ paddingTop: "40px" }}>

            {isAuthenticated ? authLinks() : guestLinks()}

            <div style={{ paddingTop: "10px" }}>
                {comments
                    .slice(0)
                    .reverse()
                    .map((comment, index) => (
                        getCommentContent(comment, index)
                    ))}

            </div>



        </Container>
    )

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {})(CommentsPage)

