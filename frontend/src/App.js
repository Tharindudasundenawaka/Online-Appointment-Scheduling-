import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentForm from "./Components/AppointmentForm";
import ConsultantList from "./Components/ConsultantList";
import JobSeekerList from "./Components/JobSeekerList";
import ReportList from "./Components/ReportList";
import UserProfile from "./Components/UserProfile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import GlobalStyle from "./Components/GlobalStyle ";

function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/appoinmentadd" exact element={<AppointmentForm />} />
          <Route path="/consultants" element={<ConsultantList />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/jobseekers" element={<JobSeekerList />} />
          <Route path="/reports" element={<ReportList />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
