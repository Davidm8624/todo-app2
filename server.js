//Express setup
const express = require("express");

require("dotenv").config();

const app = require("express")();
const PORT = process.env.PORT || 3000;

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();

app.use(express.json());

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`I'm listening at port ${PORT}!`);
  });
});
