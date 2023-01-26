const express = require("express");
const moedas = require("./data/moedas.json");

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.json({ message: "Olá mundo" });
});

server.get("/moedas", (req, res) => {
  res.json(moedas);
});

server.use((req, res, next) => {
  res.status(404).send("Not found");
});

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
