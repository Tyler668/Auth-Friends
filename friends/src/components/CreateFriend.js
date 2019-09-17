import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };


    NewFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state.newFriend)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.NewFriend}>
                    <input
                        placeholder='Name'
                        type="name"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder='Age'
                        type="age"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder='E-Mail'
                        type="email"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateFriend;
