import fs from "fs";
import csv from "csv-parser";

const filePath = "customers_csv.csv";
const cust = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (data) => cust.push(data))
  .on("end", () => {
    console.log(cust);
  });
