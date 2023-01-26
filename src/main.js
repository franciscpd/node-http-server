const http = require("http");
const moedas = require("./data/moedas.json");

http
  .createServer((req, res) => {
    req.on("error", (err) => {
      res.statusCode = 400;
      res.end("400: Bad Request");
      return;
    });

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(JSON.stringify({ message: "Olá mundo" }));
      res.end();
      return;
    }

    if (req.url === "/moedas" && req.method === "GET") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(JSON.stringify(moedas));
      res.end();
      return;
    }
  })
  .listen(8000, () => {
    console.log("Servidor está rodando na porta 8000");
  });
