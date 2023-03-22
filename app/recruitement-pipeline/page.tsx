"use client";
import { Typography, Divider, Table } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";
import { columns } from "./candidate-columns";
import { useState, useEffect } from "react";
import {  Spin } from 'antd';


export default function Page() {
  const { Text } = Typography;
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true);


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
      setLoading(false)
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
        loading={isLoading}
        columns={columns}          
        dataSource={data}
       />
    </div>
  );
}
