import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <h1 className="contactus-title">
        <span className="contact-bold">Contact</span> Us
      </h1>
      <p className="contactus-subtitle">We'd love to hear from you.</p>
      <p className="contactus-text">
        Please send us an email and we'll get back to you as soon as possible.
      </p>
      <p className="contactus-email"><i>hello@glowguard.com</i></p>
    </div>
  );
};

export default ContactUs;
