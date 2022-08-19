const healthyCheck = (fiber, protein, sugars) => {
  let healthy;
  if (
    fiber == null ||
    fiber == undefined ||
    protein == null ||
    protein == undefined ||
    sugars == null ||
    sugars == undefined
  ) {
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
