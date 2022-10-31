import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

//internal import
import Error from '@component/form/Error';
import Dashboard from '@pages/user/dashboard';
import InputArea from '@component/form/InputArea';
import UserServices from '@services/UserServices';
import { notifyError, notifySuccess } from '@utils/toast';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, currentPassword, newPassword }) => {
    UserServices.changePassword({ email, currentPassword, newPassword })
      .then((res) => {
        notifySuccess(res.message);
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  useEffect(() => {
    if (Cookies.get('userInfo')) {
      const user = JSON.parse(Cookies.get('userInfo'));
      setValue('email', user.email);
    }
  });

  return (
    <Dashboard
      title="Change-Password"
      description="This is change-password page"
    >
      <h2 className="text-xl font-serif font-semibold mb-5">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-2">
            <div className="lg:mt-6 bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    field="Email"
                  />
                  <Error errorName={errors.email} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="Current Password"
                    name="currentPassword"
                    type="password"
                    placeholder="Your Current Password"
                    field="Current Password"
                  />
                  <Error errorName={errors.currentPassword} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label="New Password"
                    name="newPassword"
                    type="password"
                    placeholder="Your New Password"
                    field="New Password"
                  />
                  <Error errorName={errors.newPassword} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
          <button
            type="submit"
            className="md:text-base leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-primary text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-base lg:text-base w-full sm:w-auto"
          >
            Change Password
          </button>
        </div>
      </form>
    </Dashboard>
  );
};

export default ChangePassword;
