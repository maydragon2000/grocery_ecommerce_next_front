import { useRouter } from 'next/router';
import React, { useState, useContext, useRef } from 'react';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';

//internal import
import Error from '@component/form/Error';
import InputArea from '@component/form/InputArea';
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { dispatch } = useContext(UserContext);
  const router = useRouter();
  const password = useRef('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  password.current = watch('newPassword');

  const submitHandler = ({ registerEmail, password, newPassword }) => {
    setLoading(true);
    if (newPassword) {
      UserServices.resetPassword({ newPassword, token: router.query?.token })
        .then((res) => {
          setLoading(false);
          setShowLogin(true);
          notifySuccess(res.message);
          setValue('newPassword');
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    }

    if (registerEmail && password) {
      UserServices.userLogin({
        registerEmail,
        password,
      })
        .then((res) => {
          setLoading(false);
          router.push('/');
          notifySuccess('Login Success!');
          dispatch({ type: 'USER_LOGIN', payload: res });
          Cookies.set('userInfo', JSON.stringify(res));
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold font-serif">
              {showLogin ? 'Login' : 'Forget Password'}
            </h2>
            <p className="text-base md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              {showLogin
                ? 'Login with your email and new password'
                : 'Reset Your Password'}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-5">
              {showLogin && (
                <>
                  {' '}
                  <div className="form-group">
                    <InputArea
                      register={register}
                      label="Email"
                      name="registerEmail"
                      type="email"
                      placeholder="Email"
                      Icon={FiMail}
                    />
                    <Error errorName={errors.registerEmail} />
                  </div>
                  <div className="form-group">
                    <InputArea
                      register={register}
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      Icon={FiLock}
                    />

                    <Error errorName={errors.password} />
                  </div>
                </>
              )}

              {!showLogin && (
                <>
                  {' '}
                  <div className="form-group">
                    <input
                      name="newPassword"
                      type="password"
                      placeholder="New password"
                      {...register('newPassword', {
                        required: 'You must specify a password',
                        minLength: {
                          value: 8,
                          message: 'Password must have at least 8 characters',
                        },
                      })}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-lg opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-primary h-11 md:h-12"
                    />

                    <Error errorName={errors.newPassword} />
                  </div>
                  <div className="form-group">
                    <input
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm password"
                      {...register('confirm_password', {
                        validate: (value) =>
                          value === password.current ||
                          'The passwords do not match',
                      })}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-base opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-primary h-11 md:h-12"
                    />

                    <Error errorName={errors.confirm_password} />
                  </div>
                </>
              )}

              <button
                disabled={loading}
                type="submit"
                className="w-full text-center py-3 rounded bg-primary font-medium text-base text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
              >
                {showLogin ? 'Login' : 'Reset Password'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   return {
//     props: { params },
//   };
// };

export default ForgetPassword;
