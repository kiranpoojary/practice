import fs from "fs";
import csv from "csv-parser";
import { Readable } from "stream";

const filePath = "customers_csv.csv";

fs.readFile(filePath, "utf8", (err, data) => {
  if (!err) {
    const readable = Readable.from([data]);
    let results = [];
    readable
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        console.log(results);
      });
  } else console.error("Error reading file:", err);
});
