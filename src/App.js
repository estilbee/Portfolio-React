import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import header2 from './images/header2.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //       </header>
          <div>
            <BrowserRouter> 
              <Navbar/>
              <Routes>
                <Route path = "/portfolio" element = {<Projects/>}/>
                <Route path = "/about" element = {<About/>}/> 
                <Route path = "/contact" element = {<Contact/>}></Route>
                {/* repeat for about and contact */}
                {/* <Contact/> */}
              </Routes>
              <Footer/>
            </BrowserRouter>
          </div>

  );
}

export default App;
