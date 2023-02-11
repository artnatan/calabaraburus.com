import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle as AddEl } from 'react-icons/io';

const AddButton = () => {
    return (
        <Link className="add-icon">
            <AddEl />
        </Link>
    )
}

export default AddButton