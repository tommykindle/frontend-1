import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileCard from "./Components/UserProfileCard"

function App() {
  const [users, setUsers] = useState([
    {name: "Hong", email: "hong@123"},
    {name: "Tom", email: "tom@456"}
  ])

  return (
    <div className="App">
  {users.map(person => <UserProfileCard person={person}/>)}
    </div>
  );
}

export default App;

