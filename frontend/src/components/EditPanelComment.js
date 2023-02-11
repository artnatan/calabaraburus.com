import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCreate as EditEl } from 'react-icons/io';
import { Row, Col } from 'react-bootstrap';

function EditPanelComment() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="edit-panel">
            <Row>
                <Col>
                    <Link to={"/posts/:post_id/comments/:id/update"} className="edit-icon">
                        <EditEl />
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default EditPanelComment

function Example() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Open Pop-up
            </button>

            {isOpen && (
                <div>
                    <div>
                        This is the content of the pop-up.
                    </div>
                    <button onClick={() => setIsOpen(false)}>
                        Close Pop-up
                    </button>
                </div>
            )}
        </div>
    );
}