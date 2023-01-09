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
        {candidate.first_name} {candidate.last_name}
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

/*
export const data: CandidateDataType[] = [
  {
    key: "1",
    candidate: { first_name: "John", last_name: "Brown" },
    email: "johnbr@gmail.com",
    experience: 2,
    skills: ["Laravel"],
    salary: { minSalary: 2500, maxSalary: 3000 },
    status: "interview",
    phone: "599993438",
  },
  {
    key: "2",
    candidate: { name: "Giorgi", last_name: "Lomishvili" },
    email: "giolom@gmail.com",
    experience: 2,
    skills: ["Next.js"],
    salary: { minSalary: 3000, maxSalary: 4000 },
    status: "First contact",
    phone: "599768899",
  },
  {
    key: "3",
    candidate: { name: "Davit", last_name: "Chichinashvili" },
    email: "davit@gmail.com",
    experience: 4,
    skills: ["Next.js"],
    salary: { minSalary: 4000, maxSalary: 5000 },
    status: "Rejected",
    phone: "599233222",
  },
];
*/
