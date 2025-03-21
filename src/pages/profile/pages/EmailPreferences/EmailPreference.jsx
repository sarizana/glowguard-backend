import React, { useState } from "react";
import "./EmailPreferences.css";

const EmailPreferences = () => {
  const [preferences, setPreferences] = useState({
    skinSortEmails: true,
    submissionEmails: true,
    notifications: true,
  });

  const handleToggle = (preference) => {
    setPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  return (
    <div className="email-preferences-container">
      <h2>Email Preferences</h2>
      <p className="email-note">
        Manage your email notifications. Uncheck any option to stop receiving those emails.
      </p>

      <div className="email-options">
        <label className="email-option">
          <input
            type="checkbox"
            checked={preferences.skinSortEmails}
            onChange={() => handleToggle("skinSortEmails")}
          />
          <div className="email-content">
            <h3>SkinSort Emails</h3>
            <p>Uncheck if you'd no longer like to receive the SkinSort Newsletter and other similar emails.</p>
          </div>
        </label>

        <label className="email-option">
          <input
            type="checkbox"
            checked={preferences.submissionEmails}
            onChange={() => handleToggle("submissionEmails")}
          />
          <div className="email-content">
            <h3>Submission Approval Emails</h3>
            <p>Uncheck this if you no longer want to receive emails when we approve your product and brand submissions.</p>
          </div>
        </label>

        <label className="email-option">
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={() => handleToggle("notifications")}
          />
          <div className="email-content">
            <h3>Notifications</h3>
            <p>Uncheck if you'd no longer like to receive notifications about routine likes and product review requests.</p>
          </div>
        </label>
      </div>

      <p className="email-footer">
        Please note - you will still receive important account update notifications such as password reset requests.
      </p>

      <button className="save-email-button">Update Email Preferences</button>
    </div>
  );
};

export default EmailPreferences;
