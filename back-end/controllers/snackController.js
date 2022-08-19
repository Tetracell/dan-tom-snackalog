const express = require("express");
const db = require("../db/dbConfig");
const snacks = express.Router();

//Queries
const {
  getAllSnacks,
  getSnack,
  makeSnack,
  eatSnack,
  editSnack,
} = require("../queries/snacks");

//Validation(s)
const { checkSnackName } = require("../validations/checkSnack");

//Index - All snacks
snacks.get("/", async (req, res) => {
  console.log("Serving snacks");
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
snacks.post("/", checkSnackName, async (req, res) => {
  try {
    const newSnack = await makeSnack(req.body);
    res.status(200).json({ payload: newSnack, success: true });
  } catch (error) {
    return error;
  }
});

//Delete Snack
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await eatSnack(id);
    if (snack.name !== "QueryResultError") {
      res.status(200).json({ payload: snack, success: true });
    } else {
      throw error;
    }
  } catch (error) {
    return res.status(400).json({ payload: error, success: false });
  }
});

//Edit Snack
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await editSnack(req.body, id);
    res.status(200).send(snack);
  } catch (error) {
    return error;
  }
});

module.exports = snacks;
