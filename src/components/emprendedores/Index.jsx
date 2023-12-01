import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Emprendedor } from "./emprendedor";

export const Emprendedores = () => {
  const value = useContext(DataContext);

  return (
    <>
      <div className="cards">
        {value.data.map((emprendedor) => (
          <Emprendedor
            key={emprendedor.name}
            photo={emprendedor.photo}
            name={emprendedor.name}
            category={emprendedor.category}
            owner={emprendedor.owner}
            social_links={emprendedor.social_links}
            description={emprendedor.description}
          />
        ))}
      </div>
    </>
  );
};
