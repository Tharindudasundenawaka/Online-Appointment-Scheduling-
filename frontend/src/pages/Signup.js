import React, { useState, useEffect } from "react";
import { InputNumber, Form, Input, Select, Radio,message } from "antd";
import logoImage from "../images/logo-no-background.png";
import {useNavigate } from 'react-router-dom';
import "../Style/Signup.css";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

function Signup() {

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Sucsessfully Sign up. please login...");
    navigate('/login')
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    console.log(typeof value);
  };
  

  

  return (
    <div className="signup">
      <div className="wrapper">
        <Form
          {...formItemLayout}
          form={form}
          className="form"
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "94",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <img src={logoImage} alt="Your Logo" className="signuplogo" />
          <Form.Item
            name="type"
            label="User Type"
            tooltip="Selecting your are a Jobseeker or Counsulter"
            rules={[
              {
                required: true,
                message: "Please select your user type",
                // whitespace: true,
              },
            ]}
          >
            <Radio.Group onChange={onChange} value={value} >
            <Radio value={1}>JobSeeker</Radio>
            <Radio value={2}>Consulter</Radio>
          </Radio.Group>
          </Form.Item>
          

          <Form.Item
            name="name"
            label="Name"
            tooltip="this will be your username"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please Enter your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>

          <button type="submit" className="button">
            Signup
          </button>
          <p className="instructlogin">
              Have an account? <a href="/login">Login up here</a>.
            </p>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
