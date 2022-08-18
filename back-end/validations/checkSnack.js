const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Snack name is invalid" });
  }
};
// Check that fiber is a valid value
const checkFiber = (req, res, next) => {
  if (!req.body.fiber) {
    res.status(400).json({ error: "Need to include fiber value" });
  }
  if (!Number(req.body.fiber)) {
    res.status(400).json({ error: "Fiber must be a numeric value" });
  }
};
// Check that protein is a valid value
const checkProtein = (req, res, next) => {
  if (!req.body.protein) {
    res.status(400).json({ error: "Need to include protein value" });
  }
  if (!Number(req.body.protein)) {
    res.status(400).json({ error: "Protein must be a numeric value" });
  }
};

module.exports = { checkName, checkFiber, checkProtein };
