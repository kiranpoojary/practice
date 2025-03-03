import fs from "fs";

const filePath = "customers_buffered_json_write.json";
const data = [
  {
    CustomerID: "1",
    FirstName: "John",
    LastName: "Doe",
    Email: "john.doe@email.com",
    Phone: "+1234567890",
  },
  {
    CustomerID: "2",
    FirstName: "Jane",
    LastName: "Smith",
    Email: "jane.smith@email.com",
    Phone: "+1987654321",
  },
  {
    CustomerID: "3",
    FirstName: "Emily",
    LastName: "Johnson",
    Email: "emily.johnson@email.com",
    Phone: "+1122334455",
  },
  {
    CustomerID: "4",
    FirstName: "Michael",
    LastName: "Williams",
    Email: "michael.williams@email.com",
    Phone: "+1234432110",
  },
  {
    CustomerID: "5",
    FirstName: "Olivia",
    LastName: "Brown",
    Email: "olivia.brown@email.com",
    Phone: "+1987432123",
  },
];

//*********************************JSON WRITE ******************************************

fs.writeFile(filePath, JSON.stringify(data), (err) => {
  if (!err) {
    console.log("File written successfuly...");
  } else console.error("Error writting file:", err);
});

//********************************* CSV WRITE ******************************************

const filePath2 = "customers_buffered_csv_write.csv";
const csvTextData =
  "CustomerID,FirstName,LastName,Email,Phone\r\n" +
  "1,John,Doe,john.doe@email.com,+1234567890\r\n" +
  "2,Jane,Smith,jane.smith@email.com,+1987654321\r\n" +
  "3,Emily,Johnson,emily.johnson@email.com,+1122334455\r\n" +
  "4,Michael,Williams,michael.williams@email.com,+1234432110\r\n" +
  "5,Olivia,Brown,olivia.brown@email.com,+1987432123\r\n";

fs.writeFile(filePath2, csvTextData, (err) => {
  if (!err) {
    console.log("File written successfully...");
  } else {
    console.error("Error writing file:", err);
  }
});
