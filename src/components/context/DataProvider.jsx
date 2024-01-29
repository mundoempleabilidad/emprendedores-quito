import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Data from "../../assets/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setData(Data);
  }, []);

  const filterCategory = (selectedCategory) => {
    if (selectedCategory === "All categories") {
      setData(Data);
    } else {
      const filteredData = Data.filter(
        (emprendedor) =>
          emprendedor.buscar.toLowerCase() === selectedCategory.toLowerCase()
      );
      setData(filteredData);
    }
  };

  const resetData = () => {
    console.log("Reset data");
    setData(Data);
  };

  const value = {
    data,
    name: [name, setName],
    category: [category, setCategory],
    filterCategory,
    resetData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
