import React from 'react'
import { Form, Button } from 'react-bootstrap'


export default function PostForm() {

    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true)

    // const handleClose = () => setShow(false)

    return (
        <>

            <Form>
                <Form.Group controlId="form.Name">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control type="text" placeholder="Enter Theme of your Post" />
                </Form.Group>
                
                <Form.Group controlId="form.Textarea">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>

        </>
    )
}
