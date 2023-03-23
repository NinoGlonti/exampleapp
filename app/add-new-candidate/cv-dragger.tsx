"use client";
import { Button,  Upload, message } from "antd";
import { useState, SyntheticEvent } from "react";
const { Dragger } = Upload;
import styles from "./cv-dragger.module.css";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";


const CvDragger = () => {
/*  const form = new FormData();
  const [file, setFile] = useState<UploadFile<undefined> | null>(null);
  const [isPdfFile, setIsPdfFile] = useState<boolean>(false);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    maxCount: 1,
    showUploadList: true,
    beforeUpload: (file) => {
      const isPDF =
      file.type === "application/pdf";

      if (file.type === "application/pdf") {
        setIsPdfFile(true);
      } else {
        setIsPdfFile(false);
      }
    },
  
    
    onChange(info) {
      const { status } = info.file;
       if(isPdfFile) {
        setFile(info.fileList[0])
       }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
       },

  };

  const handleSubmit = async(e: SyntheticEvent) => {
    let formData = new FormData();
    formData.append("cv", new Blob([file?.originFileObj as any]))
    try {
      const response = await fetch("/api/add-candidate",{
        method: "POST",
        body: formData,
   
      }
      )
    }
    catch(error) {
      console.log(error) 
    }
  }

  return (
    <Dragger className={styles["dragger"]} name="cv">
      <p className="ant-upload-text">Drag files here to upload</p>
      <p className="ant-upload-hint">or</p>
      <Button className={styles["upload-btn"]} onClick={handleSubmit}>CHOOSE FILE TO UPLOAD</Button>
    </Dragger>
  );
  */
};

export default CvDragger;
