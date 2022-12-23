"use client";

import {
  Form,
  Button,
  Typography,
  Input,
  Select,
  Row,
  FormInstance,
} from "antd";
import { getSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { Text } = Typography;
  const router = useRouter();
  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/");
      }
    });
  }, []);

  return (
    <div className="form-container">
      <div className="text-headers">
        <Text className="login-header">Import Candidates</Text>
      </div>
      <div className="form-wrapper">
        <Form
          className="login-form"
          layout="vertical"
          id={"itemForm"}
          ref={formRef}
        >
          <Row gutter={6}>
            <Form.Item
              label="Followers Count"
              name="followers"
              className="form-labels"
            >
              <Form.Item
                name="min-followers"
                style={{ display: "inline-block", width: "185px" }}
              >
                <Input className="form-inputs" placeholder="Min Followers" />
              </Form.Item>
              <Form.Item
                name="max-followers"
                style={{
                  display: "inline-block",
                  width: "185px",
                  marginLeft: "24px",
                }}
              >
                <Input className="form-inputs" placeholder="Max Followers" />
              </Form.Item>
            </Form.Item>
          </Row>
          <Row gutter={6}>
            <Form.Item
              label="Github Count of public repositories"
              name="public-repos"
              className="form-labels"
            >
              <Form.Item
                name="min-repos"
                style={{ display: "inline-block", width: "185px" }}
              >
                <Input className="form-inputs" placeholder="Min repositories" />
              </Form.Item>
              <Form.Item
                name="max-reepos"
                style={{
                  display: "inline-block",
                  width: "185px",
                  marginLeft: "24px",
                }}
              >
                <Input className="form-inputs" placeholder="Max repositories" />
              </Form.Item>
            </Form.Item>
          </Row>
          <Form.Item label="Stack" className="form-labels" name="skills">
            <Select optionFilterProp="children" showSearch></Select>
          </Form.Item>
          <Form.Item label="Location" className="form-labels" name="location">
            <Select optionFilterProp="children" showSearch></Select>
          </Form.Item>
        </Form>
        <Button type="primary" size="large" className="login-btn">
          Import
        </Button>
      </div>
    </div>
  );
};

export default Page;
