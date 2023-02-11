import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { verify } from '../actions/auth';


const Activate = ({ verify }) => {

  const { uid, token } = useParams()

  const navigate = useNavigate()

  const [verified, setVerified] = useState(false)

  const verified_account = e => {
    verify(uid, token);
    setVerified(true)
  }

  if (verified) {
    navigate('/login')
  }

  return (
    <>
      <Container>
        <div style={{ margin: "100px" }} id="verify">
          <Form style={{ background: "#696969", borderRadius: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "10px", paddingBottom: "0px" }}>
              <Form.Label style={{ color: "white" }}>Activate your account:</Form.Label>
            </Form.Group>
            <Button onClick={verified_account} style={{ margin: "10px" }} variant="danger" type="button">
              VERIFY
            </Button>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default connect(null, { verify })(Activate);