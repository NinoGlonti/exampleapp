"use client";
import { columns, data } from "./candidate-columns";
import { useState } from "react";
import { Input, Space } from "antd";

const Search = () => {
  const { Search } = Input;

  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  const [queryStringObject, setQueryStringObject] = useState<string>("");

  const onSearch = (e: any) => {
    const currentValue = e.target.value;
    console.log(e.target.value);
    setValue(currentValue);
    const filteredData = data.filter((entry) =>
      entry.candidate.name.includes(currentValue)
    );
    setDataSource(filteredData);
  };

  return (
    <Search
      placeholder="input search text"
      onSearch={(e) => {}}
      style={{ width: 200 }}
    />
  );
};

export default Search;
