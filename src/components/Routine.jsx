import React from "react";
import Navbar from "./Navbar";
import RoutineCalendar from "../pages/routine/RoutineCalendar";
import RoutineCard from "../pages/routine/RoutineCard";
import "../pages/routine/RoutineCalendar.css";
import "../pages/routine/RoutineCard.css";
import Footer from "./Footer";


const Routine = () => {
  return (
    <div className="routine-container">
              <Navbar />
      <h1 className="routine-title">My Routine</h1>
      <RoutineCalendar />
      <RoutineCard />
      <Footer />
    </div>
  );
};

export default Routine;
