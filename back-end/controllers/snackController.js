const express = require("express");
const db = require("../db/dbConfig");
const snacks = express.Router();

const { getAllSnacks } = require("../queries/snacks");

//Index
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    // A check to make sure there is at least one snack
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "Server Error - no snacks found?" });
  }
});

//Routes
// snacks.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const snack = await getSnack(id);
//   if (snack) {
//     res.json(snack);
//   } else {
//     res.status(404).json({ error: "Snack not found" });
//   }
// });

module.exports = snacks;