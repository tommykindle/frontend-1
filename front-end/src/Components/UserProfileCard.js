import React from 'react'


const UserProfileCard = (props) => {
    console.log('props', props)

    return (
        <div>
            <div>{props.person.name}</div>
            <div>{props.person.email}</div>
        </div>
    )
}

export default UserProfileCard;