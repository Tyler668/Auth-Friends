import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Axios from 'axios';

function App() {
Axios.get(`http://localhost:5000/api/friends`)
.then(res =>{
  console.log(res);
})


  return (
    <Router>
      <div className="App">

        <Link to="/login">Login</Link>

        <Link to="/protected">Protected Page</Link>

        <Switch>
          <Route exact path='/protected' component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
