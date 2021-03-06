import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserStorage} from './userContext';
import './index.css';
import Home from './pages/Home';
import SingUp from './pages/signup';
import UserScreen from './pages/userScreen';

ReactDOM.render(
  <Router>
    <UserStorage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/userScreen" element={<UserScreen />} />
      </Routes>
    </UserStorage>
  </Router>,
  document.getElementById('root')
);
