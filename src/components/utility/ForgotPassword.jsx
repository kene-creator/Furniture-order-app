import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../../store/AuthContext';

const ForgotPassword = () => {
  const signInEmail = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const resetHandler = async (e) => {
    e.preventDefault();

    if (signInEmail.current.value.trim().length === 0) {
      return setError('Enter a valid email address');
    }

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(signInEmail.current.value);
      setMessage('Check your email for further instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={resetHandler}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mt-6">
          {error && (
            <div className="bg-red-400 rounded-md py-2 px-10 text-white text-xl animate-bounce">
              {error}
            </div>
          )}
        </div>
        <div className="mt-6">
          {message && (
            <div className="bg-green-400 rounded-md py-2 px-10 text-white text-xl animate-bounce mb-4">
              {message}
            </div>
          )}
        </div>
        <h3 className="text-3xl mb-10">Reset Password</h3>
        <input
          placeholder="Email"
          type="email"
          ref={signInEmail}
          className="border-b border-b-slate-300 w-2/4 mb-10 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none py-2"
        />
        <button
          type="submit"
          className="rounded-[2rem] bg-[#D9AB82] text-white py-2 px-16 mt-6"
          disabled={loading}
        >
          Reset Password
        </button>
        <Link to="/checkout" className="text-black border-b border-black mt-4">
          Back to login
        </Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
