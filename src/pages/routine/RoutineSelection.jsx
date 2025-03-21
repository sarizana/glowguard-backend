import React, { useState } from "react";
import "./RoutineSelection.css";

const RoutineSelection = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    routineType: "",
    steps: null,
    sensitivity: "",
    budget: "",
    environment: "",
    makeupFrequency: "",
    brandPreference: "",
    skinConcerns: [],
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.routineType) newErrors.routineType = "Please select your routine type.";
    if (!formData.sensitivity) newErrors.sensitivity = "Please select your skin sensitivity.";
    if (!formData.budget) newErrors.budget = "Please select your preferred budget.";
    if (!formData.environment) newErrors.environment = "Please select your environment.";
    if (!formData.makeupFrequency) newErrors.makeupFrequency = "Please select how often you wear makeup.";
    if (!formData.brandPreference) newErrors.brandPreference = "Please select a brand preference.";
    if (formData.skinConcerns.length === 0) newErrors.skinConcerns = "Please select at least one skin concern.";
    if (!formData.consent) newErrors.consent = "You must agree to the terms.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Final Form Data:", formData);
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (concern) => {
    setFormData((prev) => ({
      ...prev,
      skinConcerns: prev.skinConcerns.includes(concern)
        ? prev.skinConcerns.filter((c) => c !== concern)
        : [...prev.skinConcerns, concern],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Personalize Your Routine</h1>
        <button className="close-button" onClick={onClose}>✖</button>

        <div className="scrollable-content">
          {/* Routine Type Selection */}
          <div className="section">
            <h2>Choose Your Routine</h2>
            <div className="routine-options">
              <button className={formData.routineType === "morning" ? "selected" : ""}
                onClick={() => setFormData({ ...formData, routineType: "morning" })}>
                🌞 Morning
              </button>
              <button className={formData.routineType === "evening" ? "selected" : ""}
                onClick={() => setFormData({ ...formData, routineType: "evening" })}>
                🌙 Evening
              </button>
            </div>
            {errors.routineType && <p className="error">{errors.routineType}</p>}
          </div>

          {/* Steps Selection (Optional) */}
          <div className="section">
            <h2>How many steps in your routine? <span className="optional">(Optional)</span></h2>
            <div className="step-selector">
              {[2, 3, 4, 5].map((num) => (
                <button key={num} className={formData.steps === num ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, steps: num })}>
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* New Questions */}
          <div className="section">
            <h2>How sensitive is your skin?</h2>
            <div className="option-group">
              {["Very Sensitive", "Somewhat Sensitive", "Not Sensitive"].map((option) => (
                <button key={option} className={formData.sensitivity === option ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, sensitivity: option })}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Preferred Budget Per Product</h2>
            <div className="option-group">
              {["Budget-Friendly", "Moderate", "Premium", "Mixed"].map((option) => (
                <button key={option} className={formData.budget === option ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, budget: option })}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Environment</h2>
            <div className="option-group">
              {["Outdoors", "Indoors", "A mix of both"].map((option) => (
                <button key={option} className={formData.environment === option ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, environment: option })}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>How often do you wear makeup?</h2>
            <div className="option-group">
              {["Everyday", "Often", "Occasionally", "Rarely or Never"].map((option) => (
                <button key={option} className={formData.makeupFrequency === option ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, makeupFrequency: option })}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Do you have a brand preference?</h2>
            <div className="option-group">
              {["Korean", "Western", "Indian", "No preference"].map((option) => (
                <button key={option} className={formData.brandPreference === option ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, brandPreference: option })}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Select Your Skin Concerns</h2>
            <div className="checkbox-group">
              {["Acne", "Pores", "Texture", "Dullness", "Sensitivity", "Redness", "Eczema", "Hyperpigmentation"].map((concern) => (
                <button key={concern} className={formData.skinConcerns.includes(concern) ? "selected" : ""}
                  onClick={() => handleCheckboxChange(concern)}>
                  {concern}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="submit" onClick={handleSubmit}>Get My Routine</button>
      </div>
    </div>
  );
};

export default RoutineSelection;
