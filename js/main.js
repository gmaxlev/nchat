const config = require("./config.js");
const staticServer = require("./static/server.js");
const entitiesBuilder = require("./api/builder.js");
const hash = require("./common/hash.js");
const db = require("./db/db.js")(config.db);
const logger = require(`./loggers/${config.logger.type}`)(
  config.logger.options
);
const transport = require(`./transports/${config.serverApi.transport}`);

(async () => {
  const dependencies = Object.freeze({
    db: Object.freeze(db),
    console: Object.freeze(logger),
    hash,
  });

  const entities = await entitiesBuilder(
    {
      entitiesPath: config.serverApi.entitiesPath,
    },
    dependencies
  );

  transport({
    routing: entities,
    port: config.serverApi.port,
    console: dependencies.console,
  });

  staticServer({
    root: config.serverStatic.path,
    port: config.serverStatic.port,
    console: logger,
  });
})();
