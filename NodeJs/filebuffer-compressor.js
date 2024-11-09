const fs = require("fs");
const { resolve } = require("path");
const { optimize } = require("@lpgroup/ghostscript");
const { PDFDocument } = require("pdf-lib");

async function optimizePdf(inputBuffer) {
  const pdfDoc = await PDFDocument.load(inputBuffer);
  pdfDoc.setTitle("");
  pdfDoc.setAuthor("");
  pdfDoc.setSubject("");
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer("");
  pdfDoc.setCreator("");
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());
  const optimizedPdfBytes = await pdfDoc.save();
  return optimizedPdfBytes;
}

// const inputBuffer = fs.readFileSync("./issue_fix1.pdf");
// optimizePdf(inputBuffer);
// optimizePdf(inputBuffer)
//   .then((optimizedBuffer) => {
//     // Write the optimized buffer to a new PDF file
//     fs.writeFileSync("output_optimized.pdf", optimizedBuffer);
//     console.log("PDF optimized and saved as output_optimized.pdf");
//   })
//   .catch((error) => {
//     console.error("Error optimizing PDF:", error);
//   });

function myGs() {
  const fileIn = resolve("./test/flytt_uppdrag.pdf");
  const fileOut = resolve("./test/flytt_uppdrag_optimized.pdf");

  const input = fs.readfilesync(fileIn);
  optimize({ input }).then((output) => {
    fs.writeFile(fileOut, output, "binary");
  });
}

myGs();
