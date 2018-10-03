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

axios.interceptors.request.use(function (config) {
  if (config.method != "GET" && !config.url.endsWith('/login')) {
    //console.log('INTERCEPTOR WORKING...');
    //console.log(config);
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = token;
      return config;
    } else {
      window.location = '/login';
    }
  } else {
    return config;
  }
}, function (error) {
  console.log('INTERCEPTOR WORKING...ERROR');
  return Promise.reject(error);
});
