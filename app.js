const http = require("http");
const port = 3000;
const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const endpoint = req.url;
  console.log(endpoint);
  switch (endpoint) {
    case "home":
      fs.readFile("pages/index.html");
  }
  res.write(endpoint);
});

app.listen(port, (err) => {
  err
    ? console.error("OOPS!!! Something Went Wrong")
    : console.log("Connected to Port:", port);
});
