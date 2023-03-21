"use client";
import { Button, Typography, Alert, Radio, Upload, message } from "antd";
import { useState, SyntheticEvent, useEffect, useMemo } from "react";
const { Dragger } = Upload;
import type { UploadProps } from "antd";
import styles from "./cv-dragger.module.css";

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  accept: "application/pdf",
  showUploadList: true,

  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const CvDragger = () => {
  return (
    <Dragger {...props} className={styles["dragger"]}>
      <p className="ant-upload-text">Drag files here to upload</p>
      <p className="ant-upload-hint">or</p>
      <Button className={styles["upload-btn"]}>CHOOSE FILE TO UPLOAD</Button>
    </Dragger>
  );
};

export default CvDragger;
