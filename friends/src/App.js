import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' component={<Login />} />
      </div>
    </Router>
  );
}

export default App;
