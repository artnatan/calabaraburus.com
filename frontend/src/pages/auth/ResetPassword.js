import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { reset_password } from '../actions/auth';


const ResetPassword = ({ reset_password }) => {

  const navigate = useNavigate()
  const [requestSent, setRequestSent] = useState(false)
  const [FormData, setFormData] = useState({
    email: ''
  })

  const { email } = FormData

  const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  }

  if (requestSent) {
    navigate('/')
  }

  return (
    <>
      <Container>
        <div style={{ margin: "100px" }} id="authentication">
          <Form onSubmit={e => onSubmit(e)} style={{ background: "#696969", borderRadius: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "10px", paddingBottom: "0px" }}>
              <Form.Label style={{ color: "white" }}>Request password reset</Form.Label>
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

            <Button style={{ margin: "10px" }} variant="danger" type="submit">
              RESET PASSWORD
            </Button>

          </Form>

          <div style={{ "paddingBottom": "10px" }}></div>


        </div>
      </Container>
    </>
  )
}


export default connect(null, { reset_password })(ResetPassword);