

import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import CurrentPosistion from "./CurrentPosistion";

import React, {useState, useEffect} from 'react';
import Axios from 'axios'

import UserProfileCard from "./Components/UserProfileCard"
import Form from "./Components/Form"
import { Route, Link } from 'react-router-dom'
import TabNav from "./Components/TabNav"
import SignUpForm from "./SignUpForm/SignUpForm";




function App() {

  const [users, setUsers] = useState([])
  const [currentUser, setUser] = useState()
  
  console.log('users state', users)

  const axiosRequest = () => {
    const token = localStorage.getItem('token')

    Axios.all([
      Axios.get("/users/currentuser", 
        {baseURL:"https://bw-friendfinder.herokuapp.com", headers:{Authorization: `Bearer ${token}`}}),
      Axios.get("/profiles/profiles", 
        {baseURL:"https://bw-friendfinder.herokuapp.com", headers:{Authorization: `Bearer ${token}`}})
    ])
    .then(Axios.spread((currentUser, profiles) => {
      console.log('cUser', currentUser)
      console.log('users', profiles.data)
      setUsers(profiles.data)
      setUser(currentUser.data)
    }))
    .catch(err => console.log('err', err))
  }

  useEffect(()=> {
    axiosRequest()
  },[])

  // console.log('id',id)

  const addUser = person => {
    const token = localStorage.getItem('token')
    Axios.post("/profiles/createprofile", person,
        {baseURL:"https://bw-friendfinder.herokuapp.com", headers:{Authorization: `Bearer ${token}`}})
        .then(res => console.log(res))
        .catch(err => console.log('err:', err.response))
        axiosRequest()
    
  }

  const editPerson = editedPerson => {
    const usersCopy = [...users];
    const oldPerson = usersCopy.find(person => person.id === editedPerson.id)
    console.log(oldPerson, editedPerson)
    oldPerson.gender = editedPerson.gender;
    oldPerson.interest = editedPerson.interest;
    oldPerson.description = editedPerson.description;
    // Object.assign(oldPerson, editedPerson);
    setUsers(usersCopy)
  }


  return (
    <div className="App">
      <Link to="/signup">  Sign Up</Link>
      <Link to="/login"> Login</Link>
      <Link to="/createprofile">   Create Profile</Link>
      <Link to="/myprofile">  My Profile </Link>
      


      <Route exact path="/createprofile"
        render={props => <Form  {...props} submitUsers={addUser} />} />
      <Route exact path="/myprofile"
        render={props => {
          if(currentUser ) {
            // looking through profiles
            // const person = users.find(profile => {
            //   console.log('person',profile)
            //   //profile id has to be equal to profile id
            // return profile.profileid === currentUser.profile.profileid 
            // })
            return <UserProfileCard {...props} person={currentUser.profile}/>
            
          } else {
            return <h1>Create a profile</h1>
          }
          
          
        } }/>
      <Route exact path="/editprofile/:id"
        render={props => {
          console.log(props)
          const person = users.find(person => person.id.toString() === props.match.params.id)
          return <Form {...props} initialPerson={person} submitUsers={editPerson} />
        }} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />

 
    </div>
  );
}

export default App;
