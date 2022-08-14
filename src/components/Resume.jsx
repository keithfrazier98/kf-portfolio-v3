import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="relative z-20 flex flex-col h-full w-full max-h-full items-center mt-24 overflow-x-hidden">
      <div>
        <div className="w-full mb-4 m-auto px-4">
          <div className="p-1px redBlue">
            <a href={pdf} download="Keith-Frazier-Resume" target="_blank" className="text-xl py-2 bg-black flex text-white justify-center hover:bg-opacity-50">
              <span className="mr-3">Download</span> <BsDownload size={24} />
            </a>
          </div>
        </div>
        <div className="Example__container__document">
          <Document onLoadError={console.error} file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
}
