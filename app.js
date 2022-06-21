const http = require("http");
const fs = require("fs");
const port = 3000;
const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const endpoint = req.url;
  switch (endpoint) {
    case "/":
      {
        fs.readFile("pages/index.html", (err, data) => {
          err
            ? res.write("We having troubles loading the file")
            : res.write(data);
        });
      }
      break;
    case "/home":
      {
        res.writeHead(301, { Location: "http://" + req.headers["host"] + "/" });
      }
      break;
    case "/about":
      fs.readFile("pages/about.html", (err, data) => {
        err
          ? res.write("We having troubles loading the file")
          : res.write(data);
      });
      break;
    case "/contact":
      fs.readFile("pages/contact.html", (err, data) => {
        err
          ? res.write("We having troubles loading the file")
          : res.write(data);
      });
      break;
    default: {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Oopps it seems you've hit an incorrect endpoint");
    }
  }
});

app.listen(port, (err) => {
  err
    ? console.error("OOPS!!! Something Went Wrong")
    : console.log(`Server Running On: http://localhost:${port}`);
});
