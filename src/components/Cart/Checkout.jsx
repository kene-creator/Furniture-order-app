import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import logo from '../../images/logo.png';
import user from '../../images/user.png';
import google from '../../images/google-logo.png';

const Checkout = () => {
  const [signup, setSignup] = useState(true);

  const signupToggle = () => {
    setSignup((prev) => !prev);
  };

  return (
    <form className="flex w-full h-screen overflow-hidden">
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
        {!signup && (
          <div>
            <div className="flex flex-col items-center">
              <h3 className="mt-10 mb-6 text-3xl font-medium">
                Create Account
              </h3>
              <input
                placeholder="Name"
                type="text"
                id="name"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Email"
                type="email"
                id="email"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Address"
                type="text"
                id="address"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Phone Number"
                type="tel"
                id="phone"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Password"
                type="password"
                id="password"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />

              <input
                placeholder="Retype Password"
                type="password"
                id="retypePassword"
                className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none"
              />
              <div className="flex flex-col items-center justify-center mt-4">
                <button
                  type="submit"
                  className="rounded-[2rem] bg-[#D9AB82] text-white py-2 px-16"
                >
                  Create Account
                </button>
                <p className="text-xl my-4">OR</p>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-[2rem] border border-black py-2 px-6"
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
        {signup && (
          <div className="flex flex-col items-center justify-center h-[90%]">
            <h3 className="text-3xl mb-10">Sign In</h3>
            <input
              placeholder="Email"
              type="email"
              className="border-b border-b-slate-300 w-2/4 mb-10 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none py-2"
            />

            <input
              placeholder="Password"
              type="password"
              className="border-b border-b-slate-300 w-2/4 mb-6 focus:border-b-[2px] focus:border-b-[#D9AB82] transition outline-none py-2"
            />
            <button
              type="submit"
              className="rounded-[2rem] bg-[#D9AB82] text-white py-2 px-16 mt-6"
            >
              Log In
            </button>
            <a href="" className="text-black border-b border-black mt-4">
              Forgot Password?
            </a>

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
