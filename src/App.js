import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import header2 from './images/header2.jpg'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
          <div>
            <BrowserRouter> 
              <Navbar/>
              <Routes>
                <Route path = "/Portfolio-React" element = {<Home/>}/>
                <Route path = "/Portfolio-React/portfolio" element = {<Projects/>}/>
                <Route path = "/Portfolio-React/about" element = {<About/>}/> 
                <Route path = "/Portfolio-React/contact" element = {<Contact/>}></Route>
                {/* repeat for about and contact */}
              </Routes>
              <Footer/>
            </BrowserRouter>
          </div>

  );
}

export default App;
