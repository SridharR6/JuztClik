import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import Login from './Login';
import Contact from './Contact';
import JoinWithUs from "./JoinWithUs";
import Signup from "./Signup";
import Electriciansub from './Electriciansub';
import Carpentersub from './Carpentersub';
import Mechanicsub from './Mechanicsub';
import Homesaloonsub from './Homesaloonsub';
import Gardenersub from './Gardenersub';
import Housecleaningsub from './Housecleaningsub';
import Physiotherapistsub from './Physiotherapistsub';
import Plumbersub from './Plumbersub';
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
    <Route path='/about' element = {<About/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path = "/joinwithus" element = {<JoinWithUs/>}/>
    <Route path = "/elecsub" element = {<Electriciansub/>}/>
    <Route path = "/mechsub" element = {<Mechanicsub/>}/>
    <Route path = "/carpsub" element = {<Carpentersub/>}/>
    <Route path = "/hcleansub" element = {<Housecleaningsub/>}/>
    <Route path = "/hsalsub" element = {<Homesaloonsub/>}/>
    <Route path = "/physiosub" element = {<Physiotherapistsub/>}/>
    <Route path = "/plumsub" element = {<Plumbersub/>}/>
    <Route path = "/gardsub" element = {<Gardenersub/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
