import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard'



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api?results=20')
    .then(res => {
      const { data } = res;
      setUsers(data.results.map(user => 
        ({ ...user, showEmail: false }) ))
    })}, []
  )


  const toggleEmail = (user) => {
    setUsers(
      users.map(u => {
        // console.log(u, 'toggle email')
        if (u.email === user.email) {
          console.log(user, 'current userr')
          return {
            ...user,
            showEmail: !user.showEmail
          }
        }
        return u
      })
      
    )
  }

  return (
    <ul>
      {users.map(user => (
      < UserCard user={user} handleClick={toggleEmail} />
      ))}
    </ul>
  )
}


export default App;
