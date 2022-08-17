const express = require("express");
const db = require("../db/dbConfig");
const snacks = express.Router();

//Queries
const { getAllSnacks, getSnack, makeSnack } = require("../queries/snacks");

//Validation(s)
const { checkName, checkHealthy } = require("../validations/checkSnack");

//Index - All snacks
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    // A check to make sure there is at least one snack
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({
      success: false,
      error: "Server Error - no snacks found?",
    });
  }
});

//Routes --

//Single Snack
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.name !== "QueryResultError") {
    res.json({ payload: snack, success: true });
  } else {
    res
      .status(404)
      .json({ payload: "not found", success: false, error: "Snack not found" });
  }
});

//Create snack -- Tests failing at the moment
snacks.post("/", checkName, async (req, res) => {
  try {
    const newSnack = await makeSnack(req.body);
    res.status(200).json({ payload: newSnack, success: true});
  } catch (error) {
    return error;
  }
});

//Delete Snack

//Edit Snack

module.exports = snacks;
