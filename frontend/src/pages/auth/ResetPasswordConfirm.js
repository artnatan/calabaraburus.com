import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { reset_password_confirm } from '../actions/auth';


const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { uid, token } = useParams();

  const navigate = useNavigate()

  const { new_password, re_new_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    navigate('/login')
  }

  return (
    <>
      <Container>
        <div style={{ margin: "100px" }} id="authentication">
          <Form onSubmit={e => onSubmit(e)} style={{ background: "#696969", borderRadius: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "10px", paddingBottom: "0px" }}>
              <Form.Label style={{ color: "white" }}>Enter new password</Form.Label>
              <Form.Control
                style={{ paddingTop: "10px" }}
                type="password"
                placeholder="New password"
                name="new_password"
                value={new_password}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "10px", paddingBottom: "0px" }}>
              <Form.Control
                style={{ paddingTop: "10px" }}
                type="password"
                placeholder="Repeat new password"
                name="re_new_password"
                value={re_new_password}
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


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);