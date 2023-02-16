import React, { useState } from 'react';
import '../index.css'


function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
        }
    };

    //function with regex that allows us to check if an email is valid 
    const checkEmail = (email) => {
        const validate = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        return validate.test(email);
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        //sending an error message if one or all of the fields are empty
        if (!email || !firstName || !message) {
            setErrorMessage("All fields are required.")
            return;
        }
        //sends an error if the email address is not a valid email
        if (!checkEmail(email)) {
            setErrorMessage("Invalid email address.")
            return;
        }

    };

    return (
        <div className="form-size">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputFirstName" class="form-label">Name</label>
                    <input
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                        required
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Email"
                        required
                    />
                </div>
                <div class="col-12">
                    <label for="inputMessage" class="form-label">Message</label>
                    <textarea
                        id="message-box"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                        required
                    />
                </div>
                <button type="button" class="btn btn-outline-success" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <p>{errorMessage}</p>
            )}
        </div>
    );
}

export default Contact;