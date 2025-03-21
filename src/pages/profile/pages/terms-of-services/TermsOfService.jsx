import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <p>Effective Date: February 14, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to GlowGuard! By using our services, you agree to the following Terms of Service. Please read them carefully.</p>
      </section>

      <section>
        <h2>2. User Accounts</h2>
        <p>To access certain features, you must create an account. You agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
      </section>

      <section>
        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for illegal activities</li>
          <li>Upload harmful content</li>
          <li>Disrupt website functionality</li>
        </ul>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>GlowGuard is not responsible for any damages resulting from the use of our website. Our AI-powered skincare recommendations are for informational purposes only.</p>
      </section>

      <section>
        <h2>5. Termination</h2>
        <p>We reserve the right to suspend or terminate your account if you violate these terms.</p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>For any questions regarding these Terms, contact us at: <strong>support@glowguard.com</strong></p>
      </section>
    </div>
  );
};

export default TermsOfService;
