
import { Emprendedores } from "./emprendedores/index";
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

