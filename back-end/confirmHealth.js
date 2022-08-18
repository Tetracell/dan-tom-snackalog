const checkHealthy = require("./helpers/checkHealthy");

const confirmHealth = (snack) => {
  return checkHealthy(snack.fiber, snack.protein, snack.added_sugar);
};

module.exports = confirmHealth;
