import React from "react";
import Navbar from "../Components/NavBar";
import { Avatar, Card } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import "../Style/Home.css";
import Job from "../Job";
import { Link, useNavigate } from "react-router-dom";
const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="jobscard">
      <Navbar />
      <div className="job-grid-container">
        {Job.map((job, index) => (
          <Card
          key={index}
          className="job-card"
          cover={<img alt="example" src={job.image} />}
          actions={[
            <label
            className="add-appointment-label"
              onClick={() => {
                navigate("/login");
              }}
            >
              <AppstoreAddOutlined key="addAppointment" />
              Add Appointment
            </label>,
          ]}
        >
          <Meta
            title={job.job_name}
            description={job.country}
          />
        </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
