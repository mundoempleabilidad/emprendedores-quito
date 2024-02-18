import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Emprendedor } from "./Emprendedor";

export const Emprendedores = () => {
  const value = useContext(DataContext);
  const emprendedoresOrdenados = [...value.data].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <div className="cards">
        {emprendedoresOrdenados.map((emprendedor) => (
          <Emprendedor
            key={emprendedor.name}
            photo={emprendedor.photo}
            name={emprendedor.name}
            category={emprendedor.category}
            owner={emprendedor.owner}
            social_links={emprendedor.social_links}
            description={emprendedor.description}
            telefono={emprendedor.telefono}
            catalogo={emprendedor.catalogo}
            buscar={emprendedor.buscar}
          />
        ))}
      </div>
    </>
  );
};
