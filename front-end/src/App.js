import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileCard from "./Components/UserProfileCard"
import Form from "./Components/Form"
import {Route, Link} from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([
    {name: "Hong", email: "hong@123"},
    {name: "Tom", email: "tom@456"}
  ])

  const addUser = person => {
    setUsers([...users, person])
  }

  return (
    <div className="App">
      <Link to="/">User Profile </Link>
      <Link to="/add"> Add User</Link>
      <Route path="/add" 
             render={props => <Form  {...props} submitUsers = {addUser}/>}      />
      <Route exact path="/" 
             render={props => users.map(person => <UserProfileCard person={person}/>)}     />
    </div>
  );
}

export default App;

