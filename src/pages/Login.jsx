import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: send request to backend and store JWT
    console.log({ email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-semibold mb-6">Login to Cinebuddy</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </form>

      {/* Register link */}
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
