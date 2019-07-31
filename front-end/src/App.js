import React, {useState} from 'react';
import './App.css';

import UserProfileCard from "./Components/UserProfileCard"
import Form from "./Components/Form"
import {Route, Link} from 'react-router-dom'
import TabNav from "./Components/TabNav"

import LoginForm from './LoginForm/LoginForm';


function App() {
  const [users, setUsers] = useState([
    {id:0, gender: "Female", interest: "Biking", description: "Crazy girl who loves adventures"},
    {id:1, number: "Male", interest: "Board Game", description: "Cool Nerd"}
  ])

  const addUser = person => {
    setUsers([...users, {...person, id: Date.now()}])
  }

  const editPerson = editedPerson => {
    const usersCopy = [...users];
    const oldPerson = usersCopy.find(person => person.id === editedPerson.id )
    console.log(oldPerson, editedPerson)
    oldPerson.gender = editedPerson.gender;
    oldPerson.interest = editedPerson.interest;
    oldPerson.description = editedPerson.description;
    // Object.assign(oldPerson, editedPerson);
    setUsers(usersCopy)
  }

  return (
    <div className="App">
      <Link to="/">My Profile </Link>
      <Link to="/add"> Create Profile</Link>
      <Route path="/add" 
             render={props => <Form  {...props} submitUsers = {addUser}/>}/>
      <Route exact path="/" 
             render={props => users.map(person => <UserProfileCard person={person}/>)}/>
      <Route path="/edit/:id"
             render={props => {
               console.log(props)
               const person = users.find(person => person.id.toString() === props.match.params.id)
               return  <Form {...props} initialPerson = {person} submitUsers = {editPerson}/>
             }}/>
      <TabNav/>
    </div>
  );
}

export default App;


