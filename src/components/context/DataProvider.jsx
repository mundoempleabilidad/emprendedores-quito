import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Data from "../../assets/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  const fetchData = async () => {
    const response = await Data;
    return response;
  };
  
  const searchName = (searchTerm) => {
    const filteredData = Data.filter((emprendedor) =>
      emprendedor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const filterCategory = (selectedCategory) => {
    if (selectedCategory === "All categories") {
      setData(Data);
    } else {
      const filteredData = Data.filter(
        (emprendedor) =>
          emprendedor.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setData(filteredData);
    }
  };

  const resetData = () => {
    setData(Data);
  };

  const value = {
    data,
    loading,
    name: [name, setName],
    category: [category, setCategory],
    searchName,
    filterCategory,
    resetData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

