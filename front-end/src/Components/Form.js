import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {browserHistory} from 'react-router'

const Form = (props) => {
    console.log('props', props)
    const {submitUsers, initialPerson} = props
    const [person, setPerson] = useState(initialPerson || {gender: "", interest: "", description: ""})
    const handleChange = event => {
        setPerson({...person, [event.target.name]: event.target.value
    })}
    const handleSubmit = event => {
        event.preventDefault();
        submitUsers(person);
        setPerson({gender: "", interest: "", description: ""});
        browserHistory.push('/myprofile')
        
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label>My gender
            <input placeholder="Female/Male/Other" 
            value={person.gender}
            name= "gender"
            onChange={handleChange} 
            />

            </label>
            <label>My interests
            <input placeholder="Hiking" 
            value={person.interest}
            name= "interest"
            onChange={handleChange}
            />
            </label>

            <label>About me
            <input placeholder="I am an extrovert..." 
            value={person.description}
            name= "description"
            onChange={handleChange}
            />
            </label>
            {/* <Link to="/myprofile"> */}
                <button >Save & Continue</button>
            {/* </Link> */}
        </form>
    )
}

export default Form; 
