import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        Friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res);
                this.setState({
                    Friends: res.data
                });
            })
            .catch(err => console.log(err));
    };

    render() {

        console.log(this.state.friends);
        const listOfFriends = this.state.Friends;
        return (
            <div className='friend-list'>
                <ol>
                    {listOfFriends.map(item => (
                        <li className='friend-item'>
                            <span>-{item.name}</span><br/>
                            <span>-{item.age}</span><br/>
                            <span>-{item.email}</span>
                        </li>
                    ))}
                </ol>
                <br/>
                <br/>
            </div>
        );
    }
}

export default FriendsList;
