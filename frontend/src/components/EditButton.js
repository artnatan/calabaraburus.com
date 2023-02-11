import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdCreate as EditEl } from 'react-icons/io';

function EditButton() {
    return (
        <Link className="edit-icon">
            <EditEl />
        </Link>
    )
}

export default EditButton