import React from "react";
import { Select } from "antd";
import { languages } from "@/utils/contstants";

const LanguageSelector = ({ onSelect }) => {
  return (
    <Select
      options={languages}
      placeholder="Translate into"
      size="small"
      style={{ width: 128 }}
      onChange={onSelect}
    />
  );
};

export default LanguageSelector;
