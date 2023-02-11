import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { signup } from '../actions/auth';


const Signup = ({ signup, isAuthenticated }) => {

  const [accountCreated, setAccountCreated] = useState(false)

  const navigate = useNavigate()

  const [FormData, setFormData] = useState({
    email: '',
    password: '',
    re_password: ''
  })

  const { email, password, re_password } = FormData

  const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();
    if (password === re_password) {
      signup(email, password, re_password);
      setAccountCreated(true);
    }

  };

  if (isAuthenticated) {
    navigate('/')
  }
  if (accountCreated) {
    navigate('/login')
  }

  return (
    <>
      <Container>
        <div style={{ margin: "100px" }} id="authentication">
          <Form onSubmit={e => onSubmit(e)} style={{ background: "#696969", borderRadius: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
              <Form.Label style={{ color: "white" }}>To register, enter your email and password</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRePassword" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="re_password"
                value={re_password}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Button style={{ margin: "10px" }} variant="danger" type="submit">
              REGISTER
            </Button>

          </Form>
          <p>
            Already have an account? <Link to="/login/">Login</Link>
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

export default connect(mapStateToProps, { signup })(Signup);