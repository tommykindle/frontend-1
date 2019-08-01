import React, {useState, useEffect} from 'react';
import Axios from 'axios'


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
    useEffect(()=> {
        const token = localStorage.getItem('token')
        Axios
        .get("/users/currentuser", 
            {baseURL:"https://bw-friendfinder.herokuapp.com", headers:{Authorization: `Bearer ${token}`}})
        .then(response => console.log('response test', response))
        .catch(err => console.log('err', err))
      },[])

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
