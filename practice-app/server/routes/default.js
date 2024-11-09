const express = require("express");
const app = express.Router();
const axios = require("axios");

app.get("/", async (req, res) => {
  //   res.status(200).json({ status: "success" });
  let data = JSON.stringify({
    email: "kiran.poojari@delcaper.com",
    mobile: "7975858166",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "",
    headers: {
      apikey: "kiran-test-api-key",
    },
    data: data,
  };
  axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  });
});

module.exports = app;
