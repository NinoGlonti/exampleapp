"use client";

import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { Formik } from "formik";
import { createUser } from "../utils/create-user";
import { response } from "express";

export default function Page() {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isSession, setSession] = useState(false);
  const [errors, setError] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setSession(true);
      }
    });
  }, []);

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

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
    } else {
      try {
        const result = await createUser(val.username, val.password);
        return result;
      } catch (error) {
        setError(error as string);
      }
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
          {errors ? <p className="error-message">{errors}</p> : null}
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
            className="register-btn"
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
