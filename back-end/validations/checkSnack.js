const checkName = (req, res, next) => {
  console.log("Performing check on snack name for proper capitalization");
  // Should not be run when a snack is 2 characters or less
  if (req.body.name.length <= 2) {
    console.log("Name too short for validation");
    next();
  }
  if (req.body.name) {
    const name = req.body.name;
    // Should we make sure we have no spaces at the beginning of the string? Yes.
    // https://www.digitalocean.com/community/tutorials/js-capitalizing-strings - Regex Code snippet used from here
    // to capitalize all words in a string
    name
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase));
    next();
  } else {
    res.status(400).json({ error: "Snack name is invalid" });
  }
};

module.exports = { checkName };
