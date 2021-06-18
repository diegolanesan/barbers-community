//IMPORTANDO LAS LIBRERIAS
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const routes = require("./routes/index.js");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");




require("./db.js");

const server = express();

server.name = "API";
//Seteando encabezados
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);

server.use("/", routes);

// Error catching endware.
server.use(errorHandler);

module.exports = server;
