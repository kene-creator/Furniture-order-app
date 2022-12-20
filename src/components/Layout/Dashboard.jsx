import { useContext, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import CartContext from '../../store/cart_context';
import { useAuth } from '../../store/AuthContext';

const Dashboard = () => {
  const [error, setError] = useState('');
  const history = useNavigate();

  const cartctx = useContext(CartContext);
  const { currentUser, logout } = useAuth();
  console.log(cartctx);
  console.log(currentUser);

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history('/');
    } catch (error) {
      setError('Failed to log out');
    }
  };

  if (!currentUser) {
    return <Navigate to="/checkout" replace />;
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="mt-6">
          {error && (
            <div className="bg-red-400 rounded-md py-2 px-10 text-white text-xl animate-bounce">
              {error}
            </div>
          )}
        </div>

        <h1 className="text-3xl mb-16 mt-8">Profile</h1>
        <Link
          to="/update-profile"
          className=" bg-[#D9AB82] py-2 px-8 rounded-md text-white"
        >
          Update profile
        </Link>
        <button
          onClick={() => {
            handleLogout();
          }}
          type="button"
          className="py-2 px-4 rounded-md text-white bg-red-400 mt-12"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
