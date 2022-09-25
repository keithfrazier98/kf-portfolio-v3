import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../resume.pdf";
import OffsetBorder from "./OffsetBorder";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="relative bg-gray-100 dark:bg-zinc-900">

    <div className="relative z-20 flex flex-col items-center pt-24">
      <div>
        <div className="w-full mb-4 m-auto px-4">
          <div className="p-1px">
            <a href={pdf} download="Keith-Frazier-Resume" target="_blank" className="text-xl py-2 btnReg flex justify-center hover:bg-opacity-50">
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
    </div>
  );
}
