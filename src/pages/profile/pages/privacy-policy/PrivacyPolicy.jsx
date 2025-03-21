import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Last Updated: February 14, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to GlowGuard! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect different types of information, including:</p>
        <ul>
          <li>Personal details (name, email, date of birth, gender)</li>
          <li>Skin type and concerns for skincare recommendations</li>
          <li>Usage data, including device and browser details</li>
          <li>Third-party authentication details (Google login, social media accounts)</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Providing personalized skincare recommendations</li>
          <li>Enhancing user experience with AI-powered analytics</li>
          <li>Sending newsletters, updates, and promotional offers</li>
          <li>Improving website security and preventing fraud</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Trusted third-party services (e.g., analytics and authentication providers)</li>
          <li>Legal authorities if required by law</li>
          <li>With your consent for marketing and promotions</li>
        </ul>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of marketing emails</li>
          <li>Request a copy of your data</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions regarding our Privacy Policy, please contact us at: <strong>support@glowguard.com</strong></p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
