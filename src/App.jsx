import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import User from './component/user';
import Error from './component/error';
import Users from './component/users';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="./user">User</Link>
          </li>
          <li>
            <Link to="./users">Users</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/user' element={<User />}></Route>
          <Route exact path='/users' element={<users />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
