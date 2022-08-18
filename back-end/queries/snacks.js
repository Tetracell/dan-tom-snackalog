const db = require("../db/dbConfig.js");

// (name, image, fiber, protein, added_sugar, is_healthy)

const healthyCheck = (fiber, protein, sugars) => {
  let healthy;
  if (fiber >= 5 || protein >= 5) {
    sugars < 5 ? (healthy = true) : (healthy = false);
  } else {
    healthy = false;
  }
  return healthy;
};

const imgCheck = (img) => {
  if (!img) {
    return "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  } else {
    return img;
  }
};

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
  let healthySnack = healthyCheck(
    snack.fiber,
    snack.protein,
    snack.added_sugar
  );
  let snackImg = imgCheck(snack.image);

  // Should we make sure we have no spaces at the beginning of the string? Yes.

  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        healthySnack,
        snackImg,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

//Edit Snack
const editSnack = async (snack, id) => {
  let healthySnack = healthyCheck(
    snack.fiber,
    snack.protein,
    snack.added_sugar
  );
  let snackImg = imgCheck(snack.image);
  try {
    const editedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        healthySnack,
        snackImg,
        id,
      ]
    );
    return editedSnack;
  } catch (error) {
    return error;
  }
};

//Delete Snack
const eatSnack = async (id) => {
  try {
    const snack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return snack;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSnacks, getSnack, makeSnack, eatSnack, editSnack };
