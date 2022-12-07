import { CandidateResponse, CandidateDataType } from "./candidate-types";
import { Typography, Divider, Col, Row, Space, Table, Button } from "antd";

import styles from "./styles.module.css";
import type { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<CandidateResponse["data"][number]> = [
  {
    title: "Candidate",
    dataIndex: "candidate",
    key: "candidate",
    render: (candidate) => (
      <p>
        {candidate.name}
        {candidate.name}
      </p>
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
    render: (_, { salary }) => (
      <>
        <p className={styles["salary-text"]}>{salary.minSalary}</p> -
        <p className={styles["salary-text"]}> {salary.maxSalary}</p>
      </>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
];

export const data: CandidateDataType[] = [
  {
    key: "1",
    candidate: { name: "John", last_name: "Brown" },
    email: "johnbr@gmail.com",
    experience: 2,
    skills: ["Laravel"],
    salary: { minSalary: 2500, maxSalary: 3000 },
    status: "interview",
    phone: "599993438",
  },
  /*{
    key: "2",
    candidate: "John Red",
    contact: "johnrd@gmail.com",
    experience: 8,
    skills: ["Laravel"],
    salary: { minSalary: 8000, maxSalary: 10000 },
    status: "interview",
  },
  {
    key: "3",
    candidate: "John White",
    contact: "johnwt@gmail.com",
    experience: 4,
    skills: ["Laravel"],
    salary: { minSalary: 4500, maxSalary: 5000 },
    status: "interview",
  },
  */
];
