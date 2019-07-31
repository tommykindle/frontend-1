import React from 'react'
import {Link} from 'react-router-dom'

const UserProfileCard = (props) => {
    console.log('props', props)

    return (
        <div>
            <div>{props.person.name}</div>
            <div>{props.person.email}</div>
            <Link to={`/edit/${props.person.id}`}>Edit</Link>
        </div>
    )
}

export default UserProfileCard;