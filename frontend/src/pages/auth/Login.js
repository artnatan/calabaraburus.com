import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { login } from '../actions/auth';


const Login = ({ login, isAuthenticated }) => {

  const navigate = useNavigate()

  const [FormData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = FormData

  const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);

  }

  if (isAuthenticated) {
    navigate('/')
  }

  return (
    <>
      <Container>
        <div style={{ margin: "100px" }} id="authentication">
          <Form onSubmit={e => onSubmit(e)} style={{ background: "#696969", borderRadius: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "10px", paddingBottom: "0px" }}>
              <Form.Label style={{ color: "white" }}>Log in with your email address and password</Form.Label>
              <Form.Control
                style={{ paddingTop: "10px" }}
                type="email"
                placeholder="Your email address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ padding: "10px" }}>
              <Form.Control
                style={{ marginTop: "10px" }}
                type="password"
                placeholder="Your password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                required
              />


            </Form.Group>
            <Button style={{ margin: "10px" }} variant="danger" type="submit">
              LOGIN
            </Button>

          </Form>
          <p>
            Don't have an account? <Link to="/signup/">SignUp</Link>
          </p>
          <p>
            Forgot your password? <Link to="/reset-password/">Reset Password</Link>
          </p>

          <div style={{ "paddingBottom": "10px" }}></div>


        </div>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);