import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import '../Style/Reports.css';

const { Header, Sider, Content } = Layout;

const Report = () => {
  const [reportType, setReportType] = useState('monthly');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, you can send the selected options to a backend API for generating the report.
  };
  
    // useEffect(() => {
     
    //   axios.get('http://localhost:8081/users')
    //     .then((response) => {
         
    //       setUsers(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching user data:', error);
    //     });
    // }, []); 
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="logo-title">Reports</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item
            icon={<RollbackOutlined />}
            onClick={() => {
              navigate("/dashbordAdmin");
            }}
          >
            <Link >Back</Link>
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

        <Content>
        <div className="report-request-container">
      <h2>Report Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reportType">Select Report Type:</label>
          <select
            id="reportType"
            name="reportType"
            value={reportType}
            onChange={handleReportTypeChange}
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="selectedDate">Select Date:</label>
          <input
            type="date"
            id="selectedDate"
            name="selectedDate"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedTime">Select Time:</label>
          <input
            type="time"
            id="selectedTime"
            name="selectedTime"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
        <button type="submit">Generate Report</button>
      </form>
    </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Report;
