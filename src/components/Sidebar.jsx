import { useContext, useState } from "react";
import { DataContext } from "./context/DataProvider";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const Sidebar = () => {
  const { category, searchName, filterCategory, resetData } =
    useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    searchName(value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="sidebar_section">
      <form className="sidebar_form">
        <Input.Search
          className="ant-input-search"
          placeholder="Buscar por nombre..."
          style={{
            width: 300,
          }}
          onChange={(e) => handleSearchChange(e.target.value)}
          value={searchTerm}
          enterButton={<SearchOutlined />}
        />
        <Select
          className="ant-select-selection"
          showSearch
          placeholder="Buscar por categoría"
          optionFilterProp="children"
          onChange={filterCategory}
          onSearch={resetData}
          filterOption={filterOption}
          value={category}
          style={{
            width: 200,
          }}
          options={[
            {
              value: "Todas las categorías",
              label: "Todas las categorías",
            },
            {
              value: "Productos",
              label: "Productos",
            },
            {
              value: "Servicios",
              label: "Servicios",
            },
          ]}
        />
      </form>
    </div>
  );
};
