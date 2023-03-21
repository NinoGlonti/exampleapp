"use client";

import {
  Form,
  Button,
  Typography,
  Input,
  FormInstance,
  Select,
  Radio,
  InputNumber,
  Divider,
  Col,
  Row,
} from "antd";
import React, { useState, useEffect, useRef } from "react";
import type { RadioChangeEvent } from "antd";
import CvDragger from "./cv-dragger";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { getCountries } from "../../utils/get-countries";
const { Option } = Select;


const Page = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const [value, setValue] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [countries, setCountries] = useState([])
  //const country_list = getCountries();
  useEffect(() => {
    setMounted(true);
  }, []);
   


  useEffect(() => {
    const fetchCountrydata = async() => {
        try {
           fetch("https://restcountries.com/v3.1/all?fields=name")
             .then(response => {
               return response.json()
             })
             .then(data => {
                setCountries(data)
             })      
        } catch (error){
           console.log(error)
        }
    }
      fetchCountrydata();
     }, [])
  
  /*
          {countries &&
                        countries.map((city: any) => (
                          <Option key={city.official} value={city.official}>
                            {city.official}
                          </Option>
                        ))}
  */
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  //types should be written
  const submitHandler = async (values: any) => {
    const response = await fetch("/api/add-candidate", {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("I am data", data));
  };

  return (
    <>
      <div className={styles["recruitement-navigation"]}>
        <Link href={"/recruitement-pipeline"} passHref>
          <ArrowLeftOutlined
            className="navigation-icon"
            style={{ fontSize: "17.6px" }}
          />
          <Text className={styles["navigation-text"]}>
            Recruitment Pipeline
          </Text>
        </Link>
      </div>
      <div className="form-container">
        <div className="text-headers">
          <Text className="login-header">Add New Candidate</Text>
          <Text className="login-reqs">
            Fill in required fields to add new candidate
          </Text>
        </div>

        <div className="form-wrapper">
          <Text className={styles["information-titles"]}>
            Personal information
          </Text>
          <Divider dashed></Divider>
          <Form
            className="login-form"
            ref={formRef}
            layout="vertical"
            id={"itemForm"}
            onFinish={submitHandler}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First name"
                  name="first_name"
                  className="form-labels"
                >
                  <Input
                    className="form-inputs"
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  className="form-labels"
                >
                  <Input
                    className="form-inputs"
                    placeholder="Last Name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Email" name="email" className="form-labels">
              <Input name="email" className="form-inputs" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phone-number"
              className="form-labels"
            >
              <Input
                className="form-inputs"
                placeholder="Phone number"
              />
            </Form.Item>
            <Form.Item
              label="Candidate location"
              className="form-labels"
              name="country_id"
            >
              <Select
                className={styles["candidate-selector"]}
                optionFilterProp="children"
                showSearch
              > 
                  {countries &&
                        countries.map((city: any) => (
                          <Option key={city.name.official} value={city.name.official}>
                            {city.name.official}
                          </Option>
                        ))}
        
              </Select>
            </Form.Item>
            <Text className={styles["information-titles"]}>
              Recruitment information
            </Text>
            <Divider dashed></Divider>
            <Form.Item label="Position" className="form-labels" name="position">
              <Input
              className="form-inputs"
              placeholder="Position"
              />
            </Form.Item>
              <Form.Item label="Salary" name="salary" className="form-labels">
                <Form.Item
                  name="min-salary"
                  style={{
                    display: "inline",
                    marginBottom: "10px",
                  }}                >
                  <Input className="form-inputs" placeholder="Min Salary"    style={{
                    marginBottom: "8px",
                  }}/>
                </Form.Item>
                <Form.Item
                  name="max-salary"
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  <Input className="form-inputs" placeholder="Max Salary" />
                </Form.Item>
              </Form.Item>

            <Form.Item label="Skills" className="form-labels" name="skills">
              <Select optionFilterProp="children" showSearch></Select>
            </Form.Item>
            <Form.Item label="Socials" name="socials" className="form-labels">
              <Form.Item
                name="linkedin"
                style={{
                  display: "inline",
                  marginBottom: "8px",
                }}
              >
                <Input
                  className="form-inputs"
                  placeholder="Paste Linkedin URL"
                  style={{
                    marginBottom: "8px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="github"
                style={{
                  display: "inline",
                }}
              >
                <Input
                  className="form-inputs"
                  placeholder="GitHub URL"
                  style={{
                    marginBottom: "8px",
                  }}
                />
              </Form.Item>
 
              </Form.Item>
            <CvDragger />
            <Radio.Group
              onChange={onChange}
              value={value}
              className={styles["radio-group"]}
            >
              <Radio value={1}>Junior </Radio>
              <Radio value={2}>Middle</Radio>
              <Radio value={3}>Senior</Radio>
              <Radio value={4}>Lead</Radio>
            </Radio.Group>
            <Form.Item
              label="Years of experience"
              name="experience"
              className="form-labels"
            >
              {mounted && (
                <InputNumber
                  placeholder="Years of experience"
                  className={styles["number-input"]}
                  style={{
                    width: "100%",
                    margin: 0,
                    borderBottom: "1px solid #e6e6e7",
                  }}
                />
              )}
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
    </>
  );
};

export default Page;
