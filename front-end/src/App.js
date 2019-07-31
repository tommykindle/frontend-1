import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import UserProfileCard from "./Components/UserProfileCard"
import Form from "./Components/Form"
import {Route, Link} from 'react-router-dom'

import LoginForm from './LoginForm/LoginForm';


function App() {
  const [users, setUsers] = useState([
    {id:0, name: "Hong", email: "hong@123"},
    {id:1, name: "Tom", email: "tom@456"}
  ])

  const addUser = person => {
    setUsers([...users, {...person, id: Date.now()}])
  }

  const editPerson = editedPerson => {
    const usersCopy = [...users];
    const oldPerson = usersCopy.find(person => person.id === editedPerson.id )
    console.log(oldPerson, editedPerson)
    oldPerson.name = editedPerson.name;
    oldPerson.email = editedPerson.email;
    setUsers(usersCopy)
  }

  return (
    <div className="App">

      <Link to="/">User Profile </Link>
      <Link to="/add"> Add User</Link>
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

      <LoginForm />

    </div>
  );
}

export default App;

