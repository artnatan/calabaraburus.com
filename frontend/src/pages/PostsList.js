import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditPanel from '../components/EditPanel';

const PostsList = ({ isAuthenticated }) => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    let getPosts = async () => {
        let response = await fetch("http://localhost:8000/posts/")
        let data = await response.json()
        setPosts(data)
    }


    const guestLinks = () => (
        <Fragment>

        </Fragment>
    )

    const authLinks = () => (
        <EditPanel />
    )


    return (

        <Container>

            <div className="posts-list text-center" style={{ "paddingTop": "100px" }}>
                {posts
                    .slice(0)
                    .reverse()
                    .map((post) => (
                        <Row key={post.id} style={{ "paddingTop": "20px" }}>
                            <Col style={{ "background": "#696969", "paddingTop": "20px" }}>
                                <Image src={post.img} className="d-block w-100" style={{ maxHeight: "300px", objectFit:"cover" }} />
                                <h2>
                                    <a href={"/posts/" + post.id} style={{ textDecoration: "none", color: 'inherit' }}>{post.theme}</a>
                                </h2>
                                <p style={{ wordWrap: "break-word", textAlign: "justify" }}>{post.short_description}</p>
                            </Col>
                        </Row>
                    ))}

            </div>
            {isAuthenticated ? authLinks() : guestLinks()}


        </Container>

    )

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(PostsList)