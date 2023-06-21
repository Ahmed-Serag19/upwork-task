import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isShown, setIsShown] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const showContactUsHandler = () => {
    setIsShown((prev) => {
      return !prev;
    });
  };
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      console.log(email);
      setEmail('');
    }
  };

  return (
    <>
      <button
        className="contact-us-btn"
        onClick={showContactUsHandler}
      >
        Contact us
      </button>
      {isShown && (
        <div className="contact">
          <button
            className="contact-us-btn"
            onClick={showContactUsHandler}
          >
            Hide
          </button>
          <form onSubmit={formSubmitHandler}>
            <h2>Sign up for exclusive access.</h2>
            <input
              value={email}
              type="email"
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {error && (
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-3 mb-5 py-3 rounded relative"
                role="alert"
              >
                <span class="block sm:inline">
                  Please enter a valid email
                </span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
              </div>
            )}
            <button type="submit">Get started</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
