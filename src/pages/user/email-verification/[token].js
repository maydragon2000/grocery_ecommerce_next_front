import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

//internal import
import { notifySuccess } from '@utils/toast';
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import Loading from '@component/preloader/Loading';

const EmailVerification = ({ params }) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    UserServices.userRegister(params?.token)
      .then((res) => {
        router.push('/');
        setLoading(false);
        setSuccess(res.message);
        notifySuccess('Register Success!');
        dispatch({ type: 'USER_LOGIN', payload: res });
        Cookies.set('userInfo', JSON.stringify(res));
      })
      .catch((err) => {
        setLoading(false);
        setError(err ? err.response.data.message : err.message);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      {loading ? (
        <Loading loading={loading} />
      ) : success ? (
        <div className="text-primary">
          <IoCheckmarkCircle className="mx-auto mb-2 text-center text-4xl" />
          <h2 className="text-xl font-medium"> {success} </h2>
        </div>
      ) : (
        <div className="text-red-500">
          <IoCloseCircle className="mx-auto mb-2 text-center text-4xl" />
          <h2 className="text-xl font-medium"> {error} </h2>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

export default EmailVerification;
