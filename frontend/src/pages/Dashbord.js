import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  FolderOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import Job from "../Job";
import { Layout, Menu, theme, Avatar, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const LayoutApp = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const viewProfile = () => {
    navigate("/profile");
  };

  const addAppointment = (event, job) => {
    event.preventDefault();
    console.log("addAppointment called with job:", job);

    // Save the appointment data to local storage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = { job };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    message.success("Add Appointment Sucsessfully!.");
    setSelectedJob(job);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="logo-title">JobSeeker</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item icon={<FolderOutlined />}>
            <Link to="/myappointment">My Appointment</Link>
          </Menu.Item>
          <Menu.Item
            icon={<HomeOutlined />}
            onClick={viewProfile}
          >
            <Link>Profile</Link>
          </Menu.Item>
          <Menu.Item
            icon={<LogoutOutlined />}
            onClick={() => {
              localStorage.removeItem("auth");
              navigate("/");
            }}
          >
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>

        <Content
          style={{
            margin: "50px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            textAlign: "center",
          }}
        >
          <div className="job-grid-container">
            {Job.map((job, index) => (
              <Card
              key={index}
              className="job-card"
              cover={<img alt="example" src={job.image} />}
              actions={[
                <label
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
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutApp;
