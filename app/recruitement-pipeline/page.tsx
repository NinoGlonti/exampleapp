"use client";
import { Typography, Divider, Col, Row, Space, Table, Button } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";
import { columns, data } from "./candidate-columns";
import Search from "./search";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { Text } = Typography;
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/");
      }
    });
  }, []);

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
      <Search />
      <Divider dashed />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;
