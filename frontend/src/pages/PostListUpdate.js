import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import port from '../img/port.png';
// import axios from 'axios';
// import { connect } from 'react-redux'
// import { AUTHTORIZE_SUCCESS, AUTHTORIZE_FAIL } from './actions/types';


const PostsListUpdate = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    let getPosts = async () => {

        let response = await fetch("http://localhost:8000/posts/update/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        })
        let data = await response.json()
        setPosts(data)
    }

    // const getPosts = () => async dispatch => {
    //     if (localStorage.getItem('access')) {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `JWT ${localStorage.getItem('access')}`
    //             }
    //         };

    //         const res = await axios.get("http://localhost:8000/posts/update/", config)
    //     }
    // };

    return (

        <Container>

            <div className="posts-list text-center" style={{ "paddingTop": "100px" }}>
                {posts
                    .slice(0)
                    .reverse()
                    .map((post, index) => (
                        <Row style={{ "paddingTop": "20px" }}>
                            <Col style={{ "background": "#696969", "paddingTop": "20px" }}>
                            <Image src={post.img} className="d-block w-100" style={{ maxHeight: "300px", objectFit:"cover" }} />
                                <h2 key={index}>
                                    <a href={"/posts/" + post.id + "/update/"} style={{ textDecoration: "none", color: 'inherit' }}>{post.theme}</a>
                                </h2>
                                <p>{post.short_description}</p>
                            </Col>
                        </Row>
                    ))}

            </div>

        </Container>

    )

}


// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// })

export default PostsListUpdate
