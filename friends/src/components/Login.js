import React from 'react';
import Axios from 'axios';

export const Login = () => {

    const submitLogin = (e) => {
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
        <div className = 'login-container'> 
                <input
                    type="text"
                    name="username"
                />
                <input
                    type="password"
                    name="password"
                />
                <button>Log in</button>
        </div>
    );

}

