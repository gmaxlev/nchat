const path = require("path");

module.exports = {
  db: {
    host: "127.0.0.1",
    port: 5432,
    name: "example",
    user: "marcus",
    password: "marcus",
  },

  serverStatic: {
    port: 8000,
    path: path.join(__dirname, "./static/public"),
  },

  serverApi: {
    port: 8001,
    // ws / http
    transport: "ws",
    entitiesPath: path.join(__dirname, "./api/entities"),
  },

  logger: {
    // node / fs / pino
    type: "fs",
    options: {
      path: path.join(__dirname, "./log"),
    },
  },
};
