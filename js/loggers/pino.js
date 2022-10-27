module.exports = () => {
  const pino = require("pino")();
  return {
    log: pino.log,
  };
};
