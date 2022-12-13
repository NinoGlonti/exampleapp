"use client";

import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

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
  const [isSession, setSession] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setSession(true);
      }
    });
  }, []);

  const submitHandler = async (val: any) => {
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        username: val.username,
        password: val.password,
      });
      getSession().then((session) => {
        if (session) {
          router.push("/import-candidate");
        }
      });
      /* if (!isSession) {
        console.log("noot a loggeed in user");
        router.push("/");
      }
      */
      //isSession ? router.push("/add-new-candidate") : router.push("/");
    } else {
      try {
        const result = createUser(val.username, val.password);
        return result;
      } catch (error) {
        console.log(error);
      }
      // router.push("/add-new-candidate");
    }
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
