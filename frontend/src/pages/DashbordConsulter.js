import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  FolderOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";

const { Header, Sider, Content } = Layout;

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
            <h2 className="logo-title">Consulter</h2>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
          >
           
            
            <Menu.Item  icon={<AppstoreAddOutlined />}>
              <Link >Add Appointment</Link>
            </Menu.Item>
            <Menu.Item  icon={<FolderOutlined />}>
              <Link >My Appointment</Link>
            </Menu.Item>
            <Menu.Item  icon={<HomeOutlined />}>
              <Link >Profile</Link>
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
            Dashbord Consulter
          </Content>

        </Layout>
      </Layout>
  );
};
export default LayoutApp;
