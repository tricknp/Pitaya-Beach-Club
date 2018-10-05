import axios from 'axios';
import {endPoints} from './api';

// verify if user is logged in
export function verifytoken(success, err) {
  console.log('verifying token...');

  let token = localStorage.getItem('token')

  if (token) {

    console.log('sending request...');
    // ask server if token still valid
    axios
    .get(endPoints.verifytoken, {headers: {authorization:token}})

    // token still valid. User is logged.
    .then(res => {
      success(res.data);
    })

    // token invalid. User needs to login
    .catch(function (error) {
      err(error);
    });

  } else {
    console.log('token not found...');
    err('token not found.')
  }
}
