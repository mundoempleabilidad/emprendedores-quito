import { useSpring, animated } from "react-spring";
import { PdfViewer } from "./PdfViewer";

export const Catalog = ({ pageNumber }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props}>
      {/* Contenido de la página del catálogo */}
      <PdfViewer />
      Página {pageNumber}
    </animated.div>
  );
};
