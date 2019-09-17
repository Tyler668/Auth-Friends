import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            Friends: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };


    NewFriend = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
            .post('/friends', this.state.newFriend)
            .then(res => {
               console.log(res)
                // redirect to the apps main page?
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.newFriend}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.newFriend.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                    />
                                        <input
                        type="text"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                    />
                                        <input
                        type="text"
                        name="name"
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
