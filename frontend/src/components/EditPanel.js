import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle as AddEl, IoMdCreate as EditEl } from 'react-icons/io';
import { Row, Col } from 'react-bootstrap';

function EditPanel() {
    return (
        <div className="edit-panel">
            <Col>
                <Row>
                    <Link to={"/posts/create"} className="add-icon">
                        <AddEl />
                    </Link>
                </Row>
                <Row>
                    <Link to={"/posts/update"} className="edit-icon">
                        <EditEl />
                    </Link>
                </Row>
            </Col>
        </div>
    )
}

export default EditPanel