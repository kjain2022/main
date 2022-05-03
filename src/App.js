import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Volunteer from './components/Volunteer';
import Home2 from './pages/Home2';
import Main from './pages/main';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/main' element={<Main/>} exact/>
      <Route path='/home2' element={<Home2/>} exact/>
      <Route path='/contact' element={<Contact/>} exact/>
      <Route path='/donation' element={<Donation/>}exact/>
      <Route path='/volunteer' element={<Volunteer/>}exact/>
      </Routes>
    </Router>
  );
}

export default App;
