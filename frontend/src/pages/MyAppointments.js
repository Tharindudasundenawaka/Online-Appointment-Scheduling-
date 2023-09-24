import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  RollbackOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import Job from "../Job";
import { Layout, Menu, theme, Avatar, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";

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

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="logo-title">Dashbord</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item
            icon={<RollbackOutlined />}
            onClick={() => {
              navigate("/dashbord");
            }}
          >
            <Link >Back</Link>
          </Menu.Item>

          <Menu.Item
            key="/logout"
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
            {appointments.map((appointment, index) => (
              <Card
                key={index}
                className="job-card"
                cover={<img alt="example" src={appointment.job.image} />}
                
              >
                <Meta
                  title={appointment.job.job_name}
                  description={appointment.job.country}
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
