"use client";

import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "../../utils/create-user";
import { SignupSchema } from "./signup-validations";
import { FormValues } from "./signup.types";
import { Formik, ErrorMessage, FormikErrors,  } from "formik";

const Register = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const [errors, setError] = useState("");
  const router = useRouter();
 // ********Next auth provides a getSession() method which can be called a client or server-side to return a session
 // *** it calls /api/auth/session and returns a promise with a session object if session exists
 //const session = use(getSession());
   const initialValues: FormValues = {
    email: "",
    username: "",
    password: ""
  };

  interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
  }

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values));
    console.log("valueeeees", values)
  };


  const submitHandler = async (val: any) => {    
        try {
          const result = await createUser(val.email, val.username, val.password, );
          setError("");
          router.push("/")
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
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >

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
              rules={[
                {
                  required: true,
                  message: "Email is a required field"
                }
              ]}
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
              rules={[
                {
                  required: true,
                  message: "Username is a required field"
                }
              ]}
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
              rules={[
                {
                  required: true,
                  message: "Password is a required field"
                }
              ]}
            >
              <Input
                name="password"
                className="form-inputs"
                placeholder="Password"
              />
            
            </Form.Item>
            {errors &&(<p className="errors">{errors}</p>)}
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
          </Form>
        </Formik>
      </div>
    </div>
  );

}
export default Register;