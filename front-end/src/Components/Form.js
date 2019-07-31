import React, {useState} from 'react';


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
        props.history.push('/myprofile')
        
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
            <button >Save & Continue</button>
        </form>
    )
}

export default Form; 
