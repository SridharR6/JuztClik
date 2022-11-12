import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./About";
import Login from './Login';
import Contact from './Contact';
import JoinWithUs from "./JoinWithUs";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<AboutUs/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path = "/joinwithus" element = {<JoinWithUs/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
