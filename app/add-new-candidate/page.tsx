"use client";

import {Form, Button, Typography, Input, FormInstance, Select, Radio, InputNumber, Divider, Col, Row } from "antd";
import React, { useState, useEffect, useRef } from "react";
import type { RadioChangeEvent } from "antd";
import styles from "./styles.module.css";
const { Option } = Select;
import {options} from "./options-data"
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";

const Page = () => {
  const { Text } = Typography;
  const formRef = useRef<FormInstance>(null);
  const [radioValue, setRadioValue] = useState("Junior");
  const [countries, setCountries] = useState([])
  const [skills, setSkills] = useState("");
  const [errors, setError] = useState("")

  const router = useRouter();


//Fetches country data from external api
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
  


  const handleChange = (value: React.SetStateAction<string>) => {
    setSkills(value)
  };

 //Radio experience values
  const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
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
      .then((data) =>  {
          {data.errors ? setError(data.errors) : router.push("/recruitement-pipeline")}
      })   
  };

  return (
    <>
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
                  rules={[
                    {
                      required: true,
                      message: "First name is a required field"
                    }
                  ]}
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
                  rules={[
                    {
                      required: true,
                      message: "Last name is a required field"
                    }
                  ]}
                >
                  <Input
                    className="form-inputs"
                    placeholder="Last Name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item 
              label="Email" 
              name="email" 
              className="form-labels"    
              rules={[
              {
                required: true,
                message: "Email is a required field"
              }
          ]}>
              <Input name="email" className="form-inputs" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phone"
              className="form-labels"
              rules={[
                {
                  required: true,
                  message: "Phone is a required field"
                }
              ]}
            >
              <InputNumber
                className="form-inputs"
                placeholder="Phone number"
              />
            </Form.Item>
            <Form.Item
              label="Candidate location"
              className="form-labels"
              name="candidate_location"
              rules={[
                {
                  required: true,
                  message: "Location is a required field"
                }
              ]}
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
            <Form.Item 
              label="Position" 
              className="form-labels" 
              name="position"
              rules={[
                {
                  required: true,
                  message: "Position is a required field"
                }
              ]}
              >
              <Input
              className="form-inputs"
              placeholder="Position"
              
              />
            </Form.Item>
              <Form.Item label="Salary" name="salary" className="form-labels">
                <Form.Item
                  name="min_salary"
                  style={{
                    display: "inline",
                    marginBottom: "10px",
                  }}                >
                  <InputNumber className="form-inputs" placeholder="Min Salary"    style={{
                    marginBottom: "8px",
                  }}/>
                </Form.Item>
                <Form.Item
                  name="max_salary"
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  <InputNumber className="form-inputs" placeholder="Max Salary" />
                </Form.Item>
              </Form.Item>

            <Form.Item 
              label="Skills"
              className="form-labels" 
              name="skills"
              rules={[
                {
                  required: true,
                  message: "Skills is a required field"
                }
              ]}
              >
              <Select 
                mode="multiple"
                onChange={handleChange}
                options={options}
                showSearch
              >

              </Select>
            </Form.Item>
            <Form.Item 
              label="Socials"  
              className="form-labels"
              >
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
           {/**<CvDragger/> */} 
           <FormItem name="status" >
              <Radio.Group
                onChange={onRadioChange}
                value={radioValue}
                className={styles["radio-group"]}
              >
                <Radio value={"Junior"}>Junior </Radio>
                <Radio value={"Middle"}>Middle</Radio>
                <Radio value={"Senior"}>Senior</Radio>
                <Radio value={"Lead"}>Lead</Radio>
              </Radio.Group>
            </FormItem>
            <Form.Item
              label="Years of experience"
              name="experience"
              className="form-labels"
              rules={[
                {
                  required: true,
                  message: "Experience is a required field"
                }
              ]}
            >
                <InputNumber
                  placeholder="Years of experience"
                  className={styles["number-input"]}
                  style={{
                    width: "100%",
                    margin: 0,
                    borderBottom: "1px solid #e6e6e7",
                  }}
                />
              
            </Form.Item>
            {errors &&(<p className="errors">{errors}</p>)}

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
