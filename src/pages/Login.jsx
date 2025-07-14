import Input from '../components/Input';
import Button from '../components/Button';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api/api';

const Login = () => {
  const [username, setUsername] = useState(''); // Backend expects username, not email
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', {
        username,
        password,
      });

      const { token } = response.data;

      // Save token to context
      login({ username, token });

      // Redirect
      navigate('/account');
    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-semibold mb-6">Login to Cinebuddy</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      <p className="text-sm text-gray-600 mt-4">
        Don’t have an account?{' '}
        <Link to="/register" className="text-rose-600 hover:underline font-medium">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;
