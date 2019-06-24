import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/Login.jsx'
// import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route path="/" component={Login}></Route>
    </Router>
    // <div>
    //   <Login ></Login>
    // </div>
  );
}

export default App;
