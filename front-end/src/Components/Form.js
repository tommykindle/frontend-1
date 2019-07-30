import React, {useState} from 'react';
import UserProfileCard from './UserProfileCard';

const Form = (props) => {
    console.log('props', props)
    const {submitUsers} = props
    const [person, setPerson] = useState({name: "", email: ""})
    const handleChange = event => {
        setPerson({...person, [event.target.name]: event.target.value
    })}
    const handleSubmit = event => {
        event.preventDefault();
        submitUsers(person);
        setPerson({name: "", email: ""})
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input placeholder="name" 
            value={person.name}
            name= "name"
            onChange={handleChange}
            
            />
            <input placeholder="email" 
            value={person.email}
            name= "email"
            onChange={handleChange}
            
            />
            <button type="submit">Continue</button>
        </form>
    )
}

export default Form; 
