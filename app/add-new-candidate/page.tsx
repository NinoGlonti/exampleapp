"use client";

import {
  Form,
  Button,
  Typography,
  Input,
  Checkbox,
  message,
  FormInstance,
  Select,
  Radio,
  InputNumber,
} from "antd";
import React, { useState, useEffect, useRef } from "react";
import type { RadioChangeEvent } from "antd";
import CvDragger from "./cv-dragger";

const Page = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const [value, setValue] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="form-container">
      <div className="text-headers">
        <Text className="login-header">Add New Candidate</Text>
        <Text className="login-reqs">
          Fill in required fields to add new candidate
        </Text>
        <Text className="login-reqs">Personal information</Text>
      </div>
      <div className="form-wrapper">
        <Form className="login-form" ref={formRef} layout="vertical">
          <Form.Item
            label="First name"
            hasFeedback
            name="first-name"
            className="form-labels"
          >
            <Input
              name="first-name"
              className="form-inputs"
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            hasFeedback
            name="last-name"
            className="form-labels"
          >
            <Input
              name="last-name"
              className="form-inputs"
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            hasFeedback
            name="email"
            className="form-labels"
          >
            <Input name="email" className="form-inputs" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Phone number"
            hasFeedback
            name="phone-number"
            className="form-labels"
          >
            <Input
              name="phone-number"
              className="form-inputs"
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item
            label="Candidate location"
            className="form-labels"
            name="country_id"
          >
            <Select optionFilterProp="children" showSearch></Select>
          </Form.Item>
          <Form.Item label="Position" className="form-labels" name="position">
            <Select optionFilterProp="children" showSearch></Select>
          </Form.Item>
          <Form.Item
            label="Salary"
            hasFeedback
            name="salary"
            className="form-labels"
          >
            <Input
              name="min-salary"
              className="form-inputs"
              placeholder="Min Salary"
            />
            <Input
              name="max-salary"
              className="form-inputs"
              placeholder="Max Salary"
            />
          </Form.Item>

          <Form.Item label="Skills" className="form-labels" name="skills">
            <Select optionFilterProp="children" showSearch></Select>
          </Form.Item>
          <Form.Item
            label="Socials"
            hasFeedback
            name="socials"
            className="form-labels"
          >
            <Input
              name="linkeding"
              className="form-inputs"
              placeholder="Paste Linkedin URL"
            />
            <Input
              name="github-followers"
              className="form-inputs"
              placeholder="GitHub followers"
            />
            <Input
              name="github-repos"
              className="form-inputs"
              placeholder="GitHub count of public repositories"
            />
          </Form.Item>
          {/*HEREE SHOULD COME DRAGGEER */}
          <CvDragger />
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Junior </Radio>
            <Radio value={2}>Middle</Radio>
            <Radio value={3}>Senior</Radio>
            <Radio value={4}>Lead</Radio>
          </Radio.Group>
          <Form.Item
            label="Years of experience"
            hasFeedback
            name="experience"
            className="form-labels"
          >
            {mounted && (
              <InputNumber
                name="candidate-source"
                className="form-inputs"
                placeholder="Candidate source"
              />
            )}
          </Form.Item>
          <Form.Item
            label="Candidate source"
            hasFeedback
            name="candidate-source"
            className="form-labels"
          >
            <Input
              name="candidate-source"
              className="form-inputs"
              placeholder="Candidate source"
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
            ADD NEW CANDIDATE
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
