import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AddGuest from './components/AddGuest';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/sign-up' element={<SignUpPage/>} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/new-guest' element={<AddGuest/>}/>
      </Routes>  
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
