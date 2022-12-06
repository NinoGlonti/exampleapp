"use client";

import {
  Form,
  Button,
  Typography,
  Input,
  Checkbox,
  message,
  FormInstance,
} from "antd";
import React, { useState, useEffect, useRef } from "react";

export default function Page() {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);

  return (
    <div className="form-container">
      <div className="text-headers">
        <Text className="login-header">Log In</Text>
        <Text className="login-reqs">Fill in required fields to sign in </Text>
      </div>
      <div className="form-wrapper">
        <Form className="login-form" ref={formRef} layout="vertical">
          <Form.Item
            label="Username"
            hasFeedback
            name="username"
            className="form-labels"
          >
            <Input
              name="username"
              className="form-inputs"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            hasFeedback
            name="password"
            className="form-labels"
          >
            <Input
              name="passwoord"
              className="form-inputs"
              placeholder="Password"
            />
          </Form.Item>
          <Button
            type="primary"
            size="large"
            className="login-btn"
            onClick={() => {
              formRef?.current?.submit();
            }}
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
