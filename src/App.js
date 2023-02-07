import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import header2 from './images/header2.jpg'

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
            <Navbar/>
            <img src = {header2} alt ='floraldesign' ></img>
            <Projects/>
            <About/>
            <Footer/>
          </div>

  );
}

export default App;
