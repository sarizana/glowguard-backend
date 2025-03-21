import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-container">
      <div className="contact-box">
        {/* Left Section - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Let's get in touch</h2>
          <p className="contact-text">
            Feel free to contact us for any inquiries or feedback. Our team is here to help you.
          </p>
          <div className="contact-email">
            <i className="bi bi-envelope"></i>
            <span>support@glowguard.com</span>
          </div>

          {/* Social Media Icons */}
          <p className="social-text">Connect with us on social media:</p>
          <div className="social-icons">
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <h2 className="contact-title">Contact us</h2>
          <form>
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="email"> <input type="email" placeholder="Email" required /></div>
           
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;