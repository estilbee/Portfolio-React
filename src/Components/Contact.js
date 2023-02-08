import React, { useState } from 'react';
import '../index.css'


function Contact(){
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'firstName' ? setFirstName(value) : setEmail(value) , setMessage(value);
    //   i think this : , is whats causing the text to pop up in both input boxes 
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
    //   // Alert the user their first and last name, clear the inputs
    //   alert(`Hello ${firstName} ${email}`);
    //   setFirstName('');
    //   setLastName('');
    };
  
    return (
      <div>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
           <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }

export default Contact;