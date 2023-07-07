import React from "react";
import { Select, Space, Button } from "antd";
import { filters } from "@/utils/contstants";

const Filters = ({ onFilterChange, onShuffle }) => {
  return (
    <Space wrap className="justify-end">
      {Object.entries(filters).map(([key, value]) => (
        <Select
          options={value.options}
          popupMatchSelectWidth={false}
          placeholder={key}
          key={key}
          onChange={(e) => onFilterChange(key, e)}
        />
      ))}
      <Button
        type="primary"
        ghost
        onClick={onShuffle}
        className="flex items-center"
      >
        Shuffle
      </Button>
    </Space>
  );
};

export default Filters;
