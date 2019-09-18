import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Createfriend from './components/CreateFriend';
// import Axios from 'axios';

function App() {
// Axios.get(`http://localhost:5000/api/friends`)
// .then(res =>{
//   console.log(res);
// })

  return (
    <Router>
      <div className="App">

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li><Link to="/createfriend">Create a Friend</Link></li>

        <Switch>
        <Route path="/login" component={Login} />
          <Route exact path='/protected' component={FriendsList} />
          <Route path = '/createfriend' component = {Createfriend}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
