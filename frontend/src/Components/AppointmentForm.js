import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [jobSeekerName, setJobSeekerName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    const appointmentData = {
      jobSeekerName,
      consultantName,
      date,
      time,
    };

    
    axios
      .post("http:///appointments", appointmentData)
      .then((response) => {
       
        console.log("Appointment created successfully!");
      })
      .catch((error) => {
       
        console.error("Error creating appointment:", error);
      });
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobSeekerName">Your Name:</label>
          <input
            type="text"
            id="jobSeekerName"
            placeholder="Name"
            value={jobSeekerName}
            onChange={(e) => setJobSeekerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="consultantName">Consultant's Name:</label>
          <input
            type="text"
            id="consultantName"
            placeholder="Consultant's Name"
            value={consultantName}
            onChange={(e) => setConsultantName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
