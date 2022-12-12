"use client";

import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

async function createUser(username: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
export default function Page() {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = async (val: any) => {
    console.log("raa", val);
    if (isLogin) {
      //login the user
    } else {
      try {
        const result = createUser(val.username, val.password);
        console.log("reesult of creation", result);
      } catch (error) {
        console.log(error);
      }
    }
    //router.push("/add-new-candidate");
  };
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <div className="form-container">
      <div className="text-headers">
        <Text className="login-header">{isLogin ? "Log In" : "Sign Up"}</Text>
        <Text className="login-reqs">Fill in required fields to sign in </Text>
      </div>
      <div className="form-wrapper">
        <Form
          className="login-form"
          ref={formRef}
          layout="vertical"
          onFinish={submitHandler}
        >
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
            {isLogin ? "Login" : "Create Account"}
          </Button>
          <Button
            type="primary"
            size="large"
            className="login-btn"
            onClick={switchAuthModeHandler}
            style={{ marginTop: "5px" }}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
