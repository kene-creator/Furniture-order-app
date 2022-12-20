import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import logo from '../../images/logo.png';
import user from '../../images/user.png';
import google from '../../images/google-logo.png';
import { useAuth } from '../../store/AuthContext';
import { provider, auth } from '../../firebase';

const Checkout = () => {
  const [signInPage, setSignInPage] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const history = useNavigate();

  const signupName = useRef();
  const signupEmail = useRef();
  const signupAddress = useRef();
  const signupPhoneNumber = useRef();
  const signupPassword = useRef();
  const signupRetypePassword = useRef();

  const signInEmail = useRef();
  const signInPassword = useRef();

  const { signup, currentUser, logIn } = useAuth();
  console.log(JSON.stringify(currentUser));

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (!signInPage) {
      if (
        signupName.current.value.trim().length === 0 ||
        signupEmail.current.value.trim().length === 0 ||
        signupAddress.current.value.trim().length === 0 ||
        signupPhoneNumber.current.value.trim().length === 0
      ) {
        return setError('Please enter the missing fields');
      }
    }

    if (!signInPage) {
      if (signupPassword.current.value !== signupRetypePassword.current.value) {
        return setError('Password do not match');
      }
    }

    try {
      setError('');
      setLoading(true);
      if (signInPage) {
        await logIn(signInEmail.current.value, signInPassword.current.value);
        history('/dashboard');
      } else {
        setMessage('');
        await signup(signupEmail.current.value, signupPassword.current.value);
        setMessage('Sign Up Successfull');
        history('/dashboard');
      }
    } catch {
      if (signInPage) {
        setError('Failed to sign in');
      } else {
        setError('Failed to create an account');
      }
    }
    setLoading(false);
  };

  const signupToggle = () => {
    setSignInPage((prev) => !prev);
  };

  const googleSignup = async () => {
    await auth.signInWithPopup(provider);
    history('/dashboard');
  };

  return (
    <form
      className="flex w-full h-screen overflow-hidden"
      onSubmit={signUpHandler}
    >
      <div className="basis-[50%] bg-[#D9AB82] text-white">
        <img src={logo} alt="company logo" className="w-36 h-32" />
        <p className="text-2xl font-mono w-[70%] ml-10 font-semibold">
          Explore world class furnitures at the best prices🎉!
        </p>
        <img
          src={user}
          alt="login user"
          className="h-[80%] mt-[-4rem] ml-[-7rem] contrast-125 saturate-100"
        />
      </div>

      <div className="basis-[60%] bg-white rounded-l-[3rem] shadow-md ml-[-5rem] font-mono">
        {!signInPage && (
          <div>
            <div className="flex flex-col items-center">
              <div className="mt-6">
                {error && (
                  <div className="bg-red-400 rounded-md py-2 px-10 text-white text-xl animate-bounce">
                    {error}
                  </div>
                )}
              </div>
              <div className="mt-6">
                {message && (
                  <div className="bg-green-400 rounded-md py-2 px-10 text-white text-xl animate-bounce">
                    {message}
                  </div>
                )}
              </div>
              <h3 className="mb-6 text-3xl font-medium">Create Account</h3>
              <input
                placeholder="Name"
                type="text"
                ref={signupName}
                id="name"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Email"
                type="email"
                ref={signupEmail}
                id="email"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Address"
                type="text"
                ref={signupAddress}
                id="address"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Phone Number"
                type="tel"
                ref={signupPhoneNumber}
                id="phone"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Password"
                type="password"
                ref={signupPassword}
                id="password"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Retype Password"
                type="password"
                ref={signupRetypePassword}
                id="retypePassword"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />
              <div className="flex flex-col items-center justify-center mt-4">
                <button
                  disabled={loading}
                  type="submit"
                  className="rounded-[2rem] bg-[#D9AB82] text-white py-2 px-16"
                >
                  Create Account
                </button>
                <p className="text-xl my-4">OR</p>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-[2rem] border border-black py-2 px-6"
                  onClick={(e) => {
                    e.preventDefault();
                    return googleSignup();
                  }}
                >
                  <img
                    src={google}
                    alt="google logo"
                    className="w-5 h-5 mr-2"
                  />
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        )}
        {signInPage && (
          <div className="flex flex-col items-center justify-center h-[90%]">
            <div className="mt-6">
              {error && (
                <div className="bg-red-400 rounded-md py-2 px-10 text-white text-xl animate-bounce">
                  {error}
                </div>
              )}
            </div>
            <h3 className="text-3xl mb-10">Sign In</h3>
            <input
              placeholder="Email"
              type="email"
              ref={signInEmail}
              className="border-b border-b-slate-300 w-2/4 mb-10 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none py-2"
            />

            <input
              placeholder="Password"
              type="password"
              ref={signInPassword}
              className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none py-2"
            />
            <button
              type="submit"
              className="rounded-[2rem] bg-[#D9AB82] text-white py-2 px-16 mt-6"
            >
              Log In
            </button>
            <Link
              to="/forgot-password"
              className="text-black border-b border-black mt-4"
            >
              Forgot Password?
            </Link>

            <p className="mt-12">
              Need an account?
              <button
                type="button"
                className="text-[#D9AB82] ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  signupToggle();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Checkout;
