import React from 'react';
import ReactDOM from 'react-dom'; // deleted the /client and that seemed to resolve that error 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById("root"));


reportWebVitals();
