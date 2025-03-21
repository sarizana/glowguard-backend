import React, { useState, useEffect } from "react";
import SkinRating from "./SkinRating";
import Concerns from "./Concerns";
import "./RoutineCalendar.css";

const RoutineCalendar = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.getDate());

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    let datesArray = [];
    for (let i = 0; i < 7; i++) {
      let nextDay = new Date(startOfWeek);
      nextDay.setDate(startOfWeek.getDate() + i);
      datesArray.push({
        day: ["S", "M", "T", "W", "T", "F", "S"][i],
        date: nextDay.getDate(),
        isToday: today.getDate() === nextDay.getDate(),
      });
    }
    setWeekDates(datesArray);
  }, []);

  const openDialog = (date) => {
    if (date === currentDate) {
      setSelectedDate(date);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="calendar-container">
      <h4 className="today-label">Today</h4>
      <div className="dates">
        {weekDates.map((item, index) => (
          <div
            key={index}
            className={`date-item ${item.isToday ? "active-date" : ""} ${item.date !== currentDate ? "disabled-date" : ""}`}
            onClick={() => openDialog(item.date)}
          >
            <span>{item.day}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            {/* ✅ Close Icon Button (No Text) */}
            <button className="close-icon" onClick={() => setIsDialogOpen(false)}>✖</button>

            <h2>Log Routine for {selectedDate}</h2>
            <div className="dialog-content">
              <SkinRating />
              <Concerns />
            </div>

            {/* ✅ Centered Save Button */}
            <div className="dialog-buttons">
              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineCalendar;
