"use client";
import React, { useState, useEffect, useRef } from "react";
import { Typography, Divider, Col, Row, Space, Table, Button } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";
import { CandidateResponse, CandidateDataType } from "./candidate-types";
import { columns, data } from "./candidate-columns";

const Page = () => {
  const { Text } = Typography;

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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;
