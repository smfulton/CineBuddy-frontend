import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-semibold">Not Logged In</h2>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Hi, {user.username} 👋</h2>
        <button
          onClick={handleLogout}
          className="cursor-pointer text-sm px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-md shadow-sm transition duration-200"
        >
          Logout
        </button>
      </div>
      <p className="text-gray-700">
        Your details and watch party history will show here.
      </p>
    </div>
  );
};

export default Account;
