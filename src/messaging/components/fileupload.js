import React from "react";
import { Button } from "@chakra-ui/react";
import { FaPaperclip } from "react-icons/fa";
import { PDFDocument } from "pdf-lib";

const FileUpload = ({ onUpload }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the PDF file
      const fileBuffer = await file.arrayBuffer();

      // Load the PDF document
      const pdfDoc = await PDFDocument.load(fileBuffer);

      // Extract text from the PDF
      const pageCount = pdfDoc.getPageCount();
      let extractedText = "";

      for (let i = 0; i < pageCount; i++) {
        const page = pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        extractedText += textContent.items.map((item) => item.str).join(" ");
        extractedText += "\n";
      }

      // Call onUpload with the extracted text
      onUpload(extractedText);
    }
  };

  return (
    <Button
      leftIcon={<FaPaperclip />}
      colorScheme="gray"
      variant="outline"
      size="sm"
      as="label"
    >
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      Attach PDF
    </Button>
  );
};

export default FileUpload;
