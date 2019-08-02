import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfileCard.scss'

const UserProfileCard = (props) => {
    console.log('props in userprofile', props)

    if (props.person) {
        return (
            <div className=' profile-card'>
                <div className='profile'>
                    <img alt='Profile picture' src={`https://robohash.org/${props.person.profileid}?200x200`} />
                    <div>I am a {props.person.gender}</div>
                    <div>I love {props.person.name}</div>
                    <div>Want to know about me, {props.person.description}</div>
                    <Link to={`/editprofile/${props.person.profileid}`}>Edit Profile</Link>
                </div>
            </div>
        )
    } else {
        return <h1>Create a profile</h1>
    }


}

export default UserProfileCard;