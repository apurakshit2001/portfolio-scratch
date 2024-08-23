// Contacts.jsx
import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <section className="contacts-section">
        <h2 className="contacts-heading">Get in Touch</h2>
        <p className="contacts-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me using any of the following methods.
        </p>
        
        <div className="contacts-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p><a href="mailto:arpan@example.com">arpan@example.com</a></p>
          </div>
          <div className="contact-method">
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/arpanrakshit" target="_blank" rel="noopener noreferrer">linkedin.com/in/arpanrakshit</a></p>
          </div>
          <div className="contact-method">
            <h3>GitHub</h3>
            <p><a href="https://github.com/arpanrakshit" target="_blank" rel="noopener noreferrer">github.com/arpanrakshit</a></p>
          </div>
          <div className="contact-method">
            <h3>Twitter</h3>
            <p><a href="https://twitter.com/arpanrakshit" target="_blank" rel="noopener noreferrer">@arpanrakshit</a></p>
          </div>
        </div>
        
        <form className="contact-form">
          <h3>Send a Message</h3>
          <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
          <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
          <button type="submit" className="contact-submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
