import axios from 'axios';
import {endPoints} from './api';

export function Login(username, password, success, err) {
  // request login to server
  axios
    .post(endPoints.login, {username,password})

    // login successful
    .then(res => {
      success(res.data);
      localStorage.setItem("token", res.data.token);
    })
    // login failed
    .catch(function (error) {
      err(error);
    });
}
