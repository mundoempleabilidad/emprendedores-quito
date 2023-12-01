
import { Emprendedores } from "./emprendedores/Index";
import Statebar from "./Statebar";

export const Directorio = () => {
  return (
    <>
      <header>
        <Statebar />
      </header>
      <div className="directorio">
        < Emprendedores className="card"/>
      </div>
    </>
  )
}

