import React from "react";
import "./Experts.css";
import { useNavigate } from "react-router-dom";
import docImage from "../../assets/doc.jpg";
import doc1Image from "../../assets/doc1.jpg";
import doc2Image from "../../assets/doc2.jpg";
import doctorImage from "../../assets/doctor.jpg";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist & Skincare Consultant",
    rating: "4.8",
    image: docImage, 
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    specialty: "Laser Treatments & Acne Specialist",
    rating: "4.9",
    image: doc1Image, 
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Anti-aging & Rejuvenation Expert",
    rating: "4.7",
    image: doc2Image, 
  },
  {
    id: 4,
    name: "Dr. Alex Carter",
    specialty: "Skin Allergies & Sensitivity Expert",
    rating: "4.6",
    image: doctorImage, 
  },
];

const Experts = () => {
  const navigate = useNavigate();

  return (
    <div className="experts-container">
      <h2 className="experts-title">Meet Our Skincare Experts</h2>
      <div className="experts-grid">
        {experts.map((expert) => (
          <div key={expert.id} className="expert-card">
            <img src={expert.image} alt={expert.name} />
            <div className="expert-info">
              <h3>{expert.name}</h3>
              <p>{expert.specialty}</p>
              <div className="expert-rating">⭐ {expert.rating}</div>
              <button onClick={() => navigate(`/experts/profile/${expert.id}`)}>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
