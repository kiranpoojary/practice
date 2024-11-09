const express = require("express");
const app = express();
const defaultRoute = require("./routes/default");
const cron = require("node-cron");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Use cors middleware with appropriate options
app.use(
  cors({
    origin: "http://localhost", // Replace with your actual domain
    credentials: true, // Enable credentials (cookies)
  })
);

// Schedule task to run at 10 minutes, 20 minutes, 30 minutes, etc., of every hour
cron.schedule("00,10,20,30,40,50 * * * *", () => {
  console.log("Task executed at: ", new Date().toLocaleTimeString());
});

app.get("/set-cookie", (req, res) => {
  res.cookie("yourCookieName", "cookieValue", {
    domain: ".localhost", // Use a dot prefix to set the cookie for the root domain and subdomains
    secure: true, // Cookie will be sent only over secure (HTTPS) connections
    httpOnly: true, // Cookie is only accessible via HTTP(S) and not JavaScript
    sameSite: "none", // Set this based on your requirements and security considerations
  });
  res.send({ message: "cookie set sucessfuly" });
});

app.get("/api", (req, res) => res.send("Server Running At Port 3001"));
app.use("/api", defaultRoute);

app.listen("3001", (err) => {
  if (!err) {
    console.log("express server running at port: 3001");
  } else {
    console.log(err);
  }
});
