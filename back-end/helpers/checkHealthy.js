const healthyCheck = (fiber, protein, sugars) => {
  let healthy;
  if (fiber === null || protein === null || sugars === null) {
    return null;
  }
  if (fiber >= 5 || protein >= 5) {
    sugars < 5 ? (healthy = true) : (healthy = false);
  } else {
    healthy = false;
  }
  return healthy;
};

module.exports = healthyCheck;
