const path = require("node:path");
const { promises: fsp } = require("node:fs");

module.exports = async ({ entitiesPath }, { console, db, hash }) => {
  const files = await fsp.readdir(entitiesPath);
  const entities = {};
  for (const fileName of files) {
    if (!fileName.endsWith(".js")) continue;
    const filePath = path.join(entitiesPath, fileName);
    const serviceName = path.basename(fileName, ".js");
    entities[serviceName] = await require(filePath)({ console, db, hash });
  }
  return entities;
};
