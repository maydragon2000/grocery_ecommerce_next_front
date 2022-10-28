import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let userInfo;
  if (Cookies.get('userInfo')) {
    userInfo = JSON.parse(Cookies.get('userInfo'));
  }

  return {
    ...config,
    headers: {
      authorization: userInfo ? `Bearer ${userInfo.token}` : null,
    },
  };
});

// console.log(process.env.API_BASE_URL);
const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),

  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),

  put: (url, body) => instance.put(url, body).then(responseBody),
};

export default requests;
