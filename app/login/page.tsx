"use client"
import { Form, Button, Typography, Input, FormInstance } from "antd";
import React, {  useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import styles from "./login.module.css"

const Login = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();

  const submitHandler = async (val: any) => {
    try {
      const data = await signIn("credentials", {
        redirect: false,
        username: val.username,
        password: val.password,
      });

      router.push("/add-new-candidate");    
    } catch (error) {
        console.log(error);
    }  
  }


  return(
    <div className="form-container">
    <div className="text-headers">
      <Text className="login-header">Log In</Text>
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
          size="large"
          className="login-btn"
          onClick={() => {
            formRef?.current?.submit();
          }}
        >
          Log In
        </Button>
        <div className={styles["sign-up"]}>
          <Text>Do not have an account yet?</Text>
          <Link href={"/register"} className="signup-btn">
              Sing Up
            </Link>
        </div>
    

      </Form>
    </div>
  </div>
   )
}
export default Login;