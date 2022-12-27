"use client";
import { Typography, Divider, Table } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";
import { columns, data } from "./candidate-columns";

async function getData() {
  console.log("get data head");
  const res = await fetch("/api/add-candidate");
  console.log("get data middle");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const { Text } = Typography;
  const data = await getData();

  /* useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/");
      }
    });
  }, []);
  */

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
}
