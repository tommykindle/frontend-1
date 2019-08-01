import React from 'react'
import {Link} from 'react-router-dom'


const UserProfileCard = (props) => {
    console.log('props', props)

    if(props.person) {
        return (
            <div>
            <div>I am a {props.person.gender}</div>
            <div>I love {props.person.interest}</div>
            <div>Want to know about me, {props.person.description}</div>
            <img alt='Profile picture' src={`https://robohash.org/${props.person.id}?200x200`}/>
            <Link to={`/editprofile/${props.person.id}`}>Edit Profile</Link>
        </div>
        )
    }else {
        return <h1>Create a profile</h1>
    }


}

export default UserProfileCard;