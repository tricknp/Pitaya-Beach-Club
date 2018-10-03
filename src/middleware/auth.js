import axios from "axios";

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {
    console.log('UNAUTHORIZED - returning to /login');
    window.location = '/login';
  } else {
    return Promise.reject(error);
  }
});
