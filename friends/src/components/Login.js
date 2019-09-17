import React from 'react';
import Axios from 'axios';

export const Login = () => {

    const submitLogin = (e) =>{
        e.preventDefault();
        Axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='login-container'>
            <input className='username' placeholder='Username' >Username</input>
            <input className='password' placeholder='Password' type='password' >Password</input>
            <button type = 'submit' className = 'login-button'>Log In</button>
        </div>
    );
}