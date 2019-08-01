

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
  const [users, setUsers] = useState([
    { id: 0, gender: "Female", interest: "Biking", description: "Crazy girl who loves adventures" },
    { id: 1, number: "Male", interest: "Board Game", description: "Cool Nerd" }
  ])

  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   Axios
  //       .get(`http://bw-friendfinder.herokuapp.com/users/currentuser`,{headers: {Authorization: `Bearer ${token}`}}) 
  //       .then(response =>
  //         console.log('response for id', response))
  //         .catch(err => console.log('err', err))
  //   },[])

  useEffect(()=> {
    const token = localStorage.getItem('token')
    Axios
    .get("/users/currentuser", 
        {baseURL:"https://bw-friendfinder.herokuapp.com", headers:{Authorization: `Bearer ${token}`}})
    .then(response => console.log('response test', response))
    .catch(err => console.log('err', err))
  },[])

  const addUser = person => {
    setUsers([...users, { ...person, id: Date.now() }])
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
      <Link to="/login"> Login</Link>
      <Link to="/signup">  Sign Up</Link>
      <Link to="/createprofile">   Create Profile</Link>
      <Link to="/myprofile">  My Profile </Link>
      


      <Route exact path="/createprofile"
        render={props => <Form  {...props} submitUsers={addUser} />} />
      <Route exact path="/myprofile"
        render={props => users.map(person => <UserProfileCard person={person} />)} />
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
