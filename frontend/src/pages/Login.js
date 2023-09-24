import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import logoImage from "../images/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Login.css";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.userType);


    axios.get('http://localhost:8081/users')
      .then((response) => {
       
        if(values.userType == "admin"){
          navigate("/dashbordAdmin");
        }else if(values.userType == "seeker"){
          navigate("/dashbord");
        }else{
          navigate("/dashbordConsulter");
        }
        
        
      })
      .catch((error) => {
        console.log("Failed:", error.response.data);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="wrapperlogin">
        <Form
          className="formlogin"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <img src={logoImage} alt="Your Logo" className="loginlogo" />
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item 
          label="User Type"
          name="userType"
            rules={[
              {
                required: true,
                message: "Please Select user Type!",
              },
            ]}
          >
        <Select>
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="seeker">Job seeker</Select.Option>
          <Select.Option value="consultant">Consultant</Select.Option>
        </Select>
      </Form.Item>

          <button type="submit" className="buttonLogin">
            Login
          </button>

          <p className="instructlogin">
            Don't Have an account? <a href="/signup">Sign up here</a>.
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
