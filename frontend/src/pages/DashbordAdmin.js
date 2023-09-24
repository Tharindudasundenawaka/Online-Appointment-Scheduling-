import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  FileTextOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
  
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";
import Job from "../Job";


const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const LayoutApp = () => {
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
          <h2 className="logo-title">Admin</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item  icon={<DeleteOutlined />} onClick={() => {
              navigate("/deleteUsers");
            }}>
            <Link>Delete Users</Link>
          </Menu.Item>
          <Menu.Item  icon={<FileTextOutlined />} onClick={() => {
              navigate("/reports");
            }}>
            <Link >Reports</Link>
          </Menu.Item>
          <Menu.Item
            icon={<LogoutOutlined />}
            onClick={() => {
              localStorage.removeItem("auth");
              navigate("/");
            }}
          >
            <Link>Logout</Link>
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
