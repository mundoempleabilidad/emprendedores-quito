import { Worker, Viewer } from "@react-pdf-viewer/core";

export const PdfViewer = ( ) => (
  <Worker
    workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
  >
    <Viewer fileUrl="../public/catalogs/MultiConfession.pdf" />
  </Worker>
);
