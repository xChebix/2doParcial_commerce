import  { useState,FormEvent } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

function RegisterUser(){
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:8081/registerUser',{username,password})
    .then(() => {navigate("/")})
    .catch(err => console.log(err));
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username here... "
            className="w-full p-2 border border-gray-300 rounded"
            onChange={e => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
