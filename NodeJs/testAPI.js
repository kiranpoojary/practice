const https = require("https");
const getPosts = () => {
  let data = "";
  const request = https.get(
    "https://pgapi.vispl.in/fe/api/v1/send?username=delctrpg.trans&password=Zt8B1&unicode=false&from=DELCAP&to=917975858166&dltPrincipalEntityId=1001605270000067553&dltContentId=1007167629091446784&text=DELCAP\n" +
      "Hi Geetha,\n" +
      "Your order id 123456 is out for delivery. Thanks for shopping with us. \n" +
      "Zlite Team",
    (response) => {
      // Set the encoding, so we don’t get log to the console a bunch of gibberish binary data
      response.setEncoding("utf8");
      // As data starts streaming in, add each chunk to “data”
      response.on("data", (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      response.on("end", () => {
        console.log(data);
      });
    }
  );
  // Log errors if any occur
  request.on("error", (error) => {
    console.error(error);
  });
  // End the request
  request.end();
};
getPosts();
