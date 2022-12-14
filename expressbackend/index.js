const express = require("express");
const server = express();

const cors = require("cors");
server.use(cors());

const bp = require("body-parser");
server.use(bp.json());

const addgrocery = require("./routes/itemadd");
server.use("/grocery", addgrocery);

server.listen(3001, () => console.log("server started"));
