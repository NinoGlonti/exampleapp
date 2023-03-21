"use client";

import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import { Formik } from "formik";
import { createUser } from "../../utils/create-user";
import Link from "next/link";

const Register = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [isSession, setSession] = useState(false);
  const [errors, setError] = useState("");
  const session = useSession();

 // ********Next auth provides a getSession() method which can be called a client or server-side to return a session
 // *** it calls /api/auth/session and returns a promise with a session object if session exists
 //const session = use(getSession());

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
        try {
          const result = await createUser(val.email, val.username, val.password, );
          console.log(result)
          //return result;
        } catch (error) {
          setError(error as string);
        }
      }
  return (
    <div className="form-container">
      <div className="text-headers">
        <Text className="login-header">Sign Up</Text>
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
            label="Email"
            hasFeedback
            name="email"
            className="form-labels"
          >
            <Input
              name="email"
              className="form-inputs"
              placeholder="Email"
            />
          </Form.Item>
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
            className="register-btn"
            onClick={() => {
              formRef?.current?.submit();
            }}            
          >
            Create an account
          </Button>
          <Link href={"/login"}>
            Login
          </Link>
        </Form>
      </div>
    </div>
  );

}
export default Register;