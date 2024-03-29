import { CandidateResponse} from "./candidate-types";
import {  Button } from "antd";

import styles from "./styles.module.css";
import type { ColumnsType } from "antd/es/table";


export const columns: ColumnsType<CandidateResponse["data"][number]> = [
  {
    title: "Candidate",
    dataIndex: "first_name",
    key: "first_name",
    render: (_,{first_name, last_name}) => (
       <p key={first_name}>{first_name} {last_name}</p>
    ),
  },
  {
    title: "Contact",
    dataIndex: "email",
    key: "email",
    render: (email) => <p key={email}>{email}</p>
  },
  {
    title: "Experience",
    dataIndex: "experience",
    key: "experience",
    render: (text) => <p  key={text}>{text} Years </p>,
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
      <p key={min_salary}>{min_salary}-{max_salary}$</p>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => <p key={status}>{status}</p>
  },
];

