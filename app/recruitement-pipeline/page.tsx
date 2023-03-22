"use client";
import { Typography, Divider, Table } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";
import { columns } from "./candidate-columns";
import { response } from "express";
import { useState, useEffect } from "react";


export default function Page() {
  const { Text } = Typography;
  const [data, setData] = useState()

useEffect(() => {
  async function getData() {
    const res = await fetch("/api/add-candidate")
    .then((response) => {
      return response.json()
    })
    .then((documents) => {
      setData(documents.documents)
    })
  }
    getData();
 }, [])


  return (
    <div className={styles["recruitement-container"]}>
      <div className={styles["recruitement-header"]}>
        <Text className={styles["recruitement-header-text"]}>
          Recruitement Pipeline
        </Text>
        <Link
          className={styles["new-candidate-btn"]}
          href={"/add-new-candidate"}
        >
          Add candidate
        </Link>
      </div>
      <Divider dashed />
      <Table
       columns={columns}          
       dataSource={data}
      />
    </div>
  );
}
