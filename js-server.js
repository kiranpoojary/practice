var http = require("http");
http
  .createServer(function (req, res) {
    var url = req.url;
    if (url === "/") {
      res.write(" Welcome to home page");
      res.end();
    } else if (url === "/about") {
      res.write(" Welcome to about us page");
      res.end();
    } else if (url === "/contact") {
      res.write(" Welcome to contact us page");
      res.end();
    } else {
      res.write("Hello World!");
      res.end();
    }
  })
  .listen(3000);
