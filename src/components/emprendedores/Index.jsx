import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { Emprendedor } from "./emprendedor";

export const Emprendedores = () => {
  const value = useContext(DataContext);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await value.resetData();
      setLoadingData(false);
    };

    fetchData();
  }, [value]);

  return (
    <>
      {loadingData ? (
        <div>Cargando datos...</div>
      ) : (
        <div className="cards">
          {value.data.map((emprendedor) => (
            <Emprendedor
              key={emprendedor.name}
              photo={emprendedor.photo}
              name={emprendedor.name}
              owner={emprendedor.owner}
              social_links={emprendedor.social_links}
              description={emprendedor.description}
            />
          ))}
        </div>
      )}
    </>
  );
};
