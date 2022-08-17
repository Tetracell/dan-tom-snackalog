const express = require("express");
const snacks = express.Router();

//Index
snacks.get("/", async (req, res) => {
  //query
});

//Routes
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "Snack not found" });
  }
});
