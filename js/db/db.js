"use strict";
const pg = require("pg");
const crud = require("./crud.js");

module.exports = (options) => {
  const pool = new pg.Pool({
    host: options.host,
    port: options.port,
    database: options.name,
    user: options.user,
    password: options.password,
  });
  return {
    crud: crud(pool),
  };
};
