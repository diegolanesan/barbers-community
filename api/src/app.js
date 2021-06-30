// //IMPORTANDO LAS LIBRERIAS
// const express = require("express");
// const morgan = require("morgan");
// const cors = require('cors');
// const routes = require("./routes/index.js");
// const errorHandler = require("./utils/middlewares/errorHandler");
// const setHeaders = require("./utils/middlewares/setHeaders");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");




// require("./db.js");

// const server = express();

// server.name = "API";
// //Seteando encabezados
// server.use(express.urlencoded({ extended: true, limit: "50mb" }));
// server.use(express.json({ limit: "50mb" }));
// server.use(cookieParser());
// server.use(morgan("dev"));
// server.use(setHeaders);

// server.use("/", routes);

// // Error catching endware.
// server.use(errorHandler);

// module.exports = server;

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./db.js");
const server = express();
const routes = require("./routes/index.js");

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// Initialize routes

server.use("/", routes);

server.use(cors({ origin: process.env.REACT_APP_API_URL, credentials: true }));

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
