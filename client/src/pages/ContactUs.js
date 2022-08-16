import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from "../img2.jpg";
import "../style/contact.css";

function ContactUS() {
  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h4c21h8', 'template_pzgoago', form.current, 'ideoCSUE6XG0jHeCJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="user_name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="user_email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" value="Send"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUS;