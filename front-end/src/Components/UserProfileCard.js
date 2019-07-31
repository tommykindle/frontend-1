import React from 'react'
import {Link} from 'react-router-dom'

const UserProfileCard = (props) => {
    console.log('props', props)

    return (
        <div>
            <div>{props.person.gender}</div>
            <div>{props.person.interest}</div>
            <div>{props.person.description}</div>
            <Link to={`/editprofile/${props.person.id}`}>Edit Profile</Link>
        </div>
    )
}

export default UserProfileCard;