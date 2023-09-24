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
import "../Style/Dashbord.css";

const { Header, Sider, Content } = Layout;

const DeleteUsers = () => {
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

  const handleDeleteUser = (userId) => {
    
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="logo-title">Delete Users</h2>
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
            height: "40px", 
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
          <div className="delete-users-container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            <div className="user-info">
              <strong>Username:</strong> {user.username}<br />
              <strong>User Type:</strong> {user.userType}<br />
              <strong>Phone Number:</strong> {user.phoneNumber}
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default DeleteUsers
