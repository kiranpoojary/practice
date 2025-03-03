import fs from "fs";

const filePath = "customers_streamed_csv_write.csv";

const writer = fs.createWriteStream(filePath);

const content = ["name,age\n", "Kiran,27\n", "Ram,25\n"];

content.forEach((c) => {
  writer.write(c);
});

writer.end(() => {
  console.log("write done");
});

//****************************JSON Content Write**********************************
const jsonContent = ["name,age\n", "Kiran,27\n", "Ram,25\n"];

const csvString = jsonContent.join(""); // Join the array elements to form a single string
const rows = csvString.split("\n").filter((row) => row !== ""); // Remove empty rows
const header = rows[0].split(","); // Split by comma to get column names

// Convert the remaining rows into an array of JSON objects
const jsonData = rows.slice(1).map((row) => {
  const values = row.split(",");
  let obj = {};
  header.forEach((column, index) => {
    obj[column] = values[index]; // Create key-value pairs
  });
  return obj;
});

// Write the resulting JSON to a file with stringified
const filePath2 = "customers_streamed_json_write.json";
fs.writeFile(filePath2, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("JSON file written successfully");
  }
});
