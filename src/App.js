import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';



function App() {
  const [users, setUsers] = useState([]);

  const getUsersFromApi = () => {
    axios.get('https://randomuser.me/api?results=25')
    // I blindly copied this from the teacher's example but I don't understand it and could not replicate it on my own!
    .then(res => {
      const { data } = res;
      // this.setState({
      //   users: data.results.map(user => ({...user, show: false}))
      // })
      setUsers(data.results.map(user => ({ ...user, show: false }) ))
    })

  useEffect(getUsersFromApi, [])

  }

  return (
    <div>
    </div>
  );
}

export default App;
