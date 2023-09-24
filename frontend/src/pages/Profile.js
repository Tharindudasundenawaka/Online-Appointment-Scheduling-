import React, { useState,useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  FileTextOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";
import axios from 'axios';


const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:8081/users')
      .then((response) => {
       
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); 
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
          <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username}<br />
            <strong>User Type:</strong> {user.userType}<br />
            <strong>Phone Number:</strong> {user.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default UserList;
