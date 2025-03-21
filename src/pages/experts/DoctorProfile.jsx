import React from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./DoctorProfile.css";
import { FaStar, FaClock, FaUser, FaMapMarkerAlt, FaUsers, FaTwitter, FaLinkedin } from "react-icons/fa";

// ✅ Import all doctor images
import docImage from "../../assets/doc.jpg";
import doc1Image from "../../assets/doc1.jpg";
import doc2Image from "../../assets/doc2.jpg";
import doctorImage from "../../assets/doctor.jpg";

// ✅ Doctors list
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist & Skincare Consultant",
    rating: "4.8",
    experience: "12 years",
    patientsTreated: "1000+",
    activeTime: "2 PM - 5 PM",
    location: "Los Angeles, CA",
    image: docImage,  
  },
  {
    id: "2",
    name: "Dr. Michael Smith",
    specialty: "Laser Treatments & Acne Specialist",
    rating: "4.9",
    experience: "10 years",
    patientsTreated: "950+",
    activeTime: "3 PM - 5 PM",
    location: "New York, NY",
    image: doc1Image,  
  },
  {
    id: "3",
    name: "Dr. Emily Brown",
    specialty: "Anti-aging & Rejuvenation Expert",
    rating: "4.7",
    experience: "8 years",
    patientsTreated: "850+",
    activeTime: "10 AM - 2 PM",
    location: "Chicago, IL",
    image: doc2Image,  
  },
  {
    id: "4",
    name: "Dr. Alex Carter",
    specialty: "Skin Allergies & Sensitivity Expert",
    rating: "4.6",
    experience: "9 years",
    patientsTreated: "700+",
    activeTime: "1 PM - 4 PM",
    location: "San Francisco, CA",
    image: doctorImage,
  },
];

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return <h2 className="not-found">Doctor not found!</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="doctor-profile-container">
        <div className="doctor-profile-card">
          <div className="doctor-image-section">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          </div>

          <div className="doctor-info-section">
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-specialty"><FaUser /> {doctor.specialty}</p>
            <p className="doctor-introduction">
              {doctor.name} specializes in {doctor.specialty}, helping patients achieve smooth skin with minimal downtime.
            </p>

            <div className="doctor-stats">
              <p><FaStar className="icon" /> <strong>Rating:</strong> {doctor.rating}</p>
              <p><FaUser className="icon" /> <strong>Experience:</strong> {doctor.experience}</p>
              <p><FaUsers className="icon" /> <strong>Patients Treated:</strong> {doctor.patientsTreated}</p>
              <p><FaClock className="icon" /> <strong>Active Time:</strong> {doctor.activeTime}</p>
              <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> {doctor.location}</p>
            </div>

            {/* Social Media Icons */}
            <div className="doctor-socials">
              <FaTwitter className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>

            {/* ✅ Fixed Chat Button */}
            <button className="chat-button" onClick={() => navigate(`/experts/chat/${doctor.id}`)}>
              💬 Start Chat
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorProfile;
