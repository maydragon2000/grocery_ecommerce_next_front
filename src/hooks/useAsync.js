import axios from 'axios';
import { useEffect, useState } from 'react';

const useAsync = (asyncFunction) => {
  const [data, setData] = useState([] || {});
  const [error, setError] = useState('');
  const [errCode, setErrCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    asyncFunction({ cancelToken: source.token })
      .then((res) => {
        if (!unmounted) {
          setData(res);
          setError('');
          setLoading(false);
        }
      })
      .catch((err) => {
        setErrCode(err?.response?.status);
        if (!unmounted) {
          console.log(err.message);
          setError(err.message);
          if (axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
            setData({});
          } else {
            // console.log('another error happened:' + err.message);
            setError(err.message);
            setLoading(false);
            setData({});
          }
        }
      });

    return () => {
      (unmounted = true), source.cancel('Cancelled in cleanup');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (errCode === 401) {
      Cookies.remove('userInfo');

      console.log('status 401', errCode);
      window.location.replace(`${process.env.NEXT_PUBLIC_STORE_DOMAIN}`);
    }
  }, [errCode]);

  return {
    data,
    error,
    loading,
  };
};

export default useAsync;
