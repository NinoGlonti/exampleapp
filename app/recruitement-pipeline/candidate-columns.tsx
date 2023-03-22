import { CandidateResponse, CandidateDataType } from "./candidate-types";
import { Typography, Divider, Col, Row, Space, Table, Button } from "antd";

import styles from "./styles.module.css";
import type { ColumnsType } from "antd/es/table";


export const columns: ColumnsType<CandidateResponse["data"][number]> = [
  {
    title: "Candidate",
    dataIndex: "first_name",
    key: "first_name",
    render: (_,{first_name, last_name}) => (
       <p>{first_name} {last_name}</p>
    ),
  },
  {
    title: "Contact",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Experience",
    dataIndex: "experience",
    key: "experience",
    render: (text) => <p>{text} Years </p>,
  },
  {
    title: "Skills",
    dataIndex: "skills",
    key: "skills",
    render: (_, { skills }) => (
      <>
        {skills.map((skill) => {
          return (
            <Button disabled key={skill}>
              {skill.toUpperCase()}
            </Button>
          );
        })}
      </>
    ),
  },
  {
    title: "Salary Range",
    dataIndex: "salary",
    key: "salary",
    render: (_, { min_salary, max_salary }) => (
      <p>{min_salary}-{max_salary}$</p>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
];

