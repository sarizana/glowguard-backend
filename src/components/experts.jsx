import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ExpertsPage from "../pages/experts/experts"; // ✅ Renamed import
import DoctorChat from "../pages/experts/DoctorChat";

const Experts = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route index element={<ExpertsPage />} /> {/* ✅ Default Experts Page */}
          <Route path="chat/:id" element={<DoctorChat />} /> {/* ✅ Chat with doctor */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Experts;
