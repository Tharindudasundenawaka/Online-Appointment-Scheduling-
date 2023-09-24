import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord";
import DashbordConsulter from "./pages/DashbordConsulter";
import DashbordAdmin from "./pages/DashbordAdmin";
import Profile from "./pages/Profile";
import Myappointment from "./pages/MyAppointments";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import DeleteUsers from "./pages/DeleteUsers";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/dashbordConsulter" element={<DashbordConsulter />} />
          <Route path="/dashbordAdmin" element={<DashbordAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myappointment" element={<Myappointment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/deleteUsers" element={<DeleteUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
