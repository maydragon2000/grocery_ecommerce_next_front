import React, { useState } from 'react';
import { ImFacebook, ImGoogle } from 'react-icons/im';

//internal import
import Login from '@component/login/Login';
import Register from '@component/login/Register';
import ResetPassword from '@component/login/ResetPassword';
import useLoginSubmit from '@hooks/useLoginSubmit';

const Common = ({ setModalOpen }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const { handleGoogleSignIn, GoogleLogin } = useLoginSubmit(setModalOpen);

  const handleModal = () => {
    setShowRegister(!showRegister);
    setShowResetPassword(false);
  };

  return (
    <>
      <div className="overflow bg-white mx-auto">
        {showResetPassword ? (
          <ResetPassword
            setShowResetPassword={setShowResetPassword}
            setModalOpen={setModalOpen}
          />
        ) : showRegister ? (
          <Register
            setShowResetPassword={setShowResetPassword}
            setModalOpen={setModalOpen}
          />
        ) : (
          <Login
            setShowResetPassword={setShowResetPassword}
            setModalOpen={setModalOpen}
          />
        )}

        <div className="my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
          OR
        </div>

        <div className="flex justify-between flex-col lg:flex-row">
          <button className="text-base inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2">
            <ImFacebook /> <span className="ml-2">Login With Facebook</span>
          </button>

          <GoogleLogin
            clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
            render={(renderProps) => (
              <button
                className="text-base inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <ImGoogle /> <span className="ml-2">Login With Google</span>
              </button>
            )}
            onSuccess={handleGoogleSignIn}
            onFailure={handleGoogleSignIn}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className="text-center text-base text-gray-900 mt-4">
          <div className="text-gray-500 mt-2.5">
            {showRegister ? 'Already have a account ?' : 'Not have a account ?'}
            <button
              onClick={handleModal}
              className="text-gray-800 hover:text-primary font-bold mx-2"
            >
              {showRegister ? 'Login' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
