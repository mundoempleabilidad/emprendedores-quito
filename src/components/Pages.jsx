import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Directorio } from "./Directorio";
import { Details } from "./emprendedores/detalle";

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/directorio/:name" element={<Details />} />
      </Routes>
    </section>
  );
};
