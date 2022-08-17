const db = require("../db/dbConfig.js");

// (name, image, fiber, protein, added_sugar, is_healthy)

//All snacks
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

//Single Snack
const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

//Create Snack
const makeSnack = async (snack) => {
  let healthySnack;
  if (snack.fiber >= 5 || snack.protein >= 5) {
    snack.added_sugar < 5 ? (healthySnack = true) : (healthySnack = false);
  } else {
    healthySnack = false;
  }
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        healthySnack,
        snack.image,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

//Delete Snack

module.exports = { getAllSnacks, getSnack, makeSnack };
