import  { useState,FormEvent } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

function LogIn(){
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSuccessfulLogin = (id: string) => {
    // Guardar el ID del usuario en localStorage
    localStorage.setItem('user_id', id);

    // Redirigir a la página de inicio o a donde sea necesario después del inicio de sesión
    navigate('/home');
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { username, password })
      .then((response) => {
        // Verificar si el inicio de sesión fue exitoso en la respuesta del servidor
        if (response.status === 200 && response.data.id) {
          // El inicio de sesión fue exitoso, guardar el ID del usuario y redirigir
          handleSuccessfulLogin(response.data.id);
        } else {
          // Manejar el caso de inicio de sesión fallido
          console.log('Inicio de sesión fallido');
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          Login
        </button>
      </form>
      <div className="mt-4">
        <p>No tienes una cuenta aún? <button onClick={() => {navigate("/RegisterUser")}}>Regístrate</button></p>
      </div>
    </div>
  );
}

export default LogIn;
