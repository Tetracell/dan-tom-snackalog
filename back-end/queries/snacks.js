const db = require("../db/dbConfig.js");

// (name, fiber, protein, added_sugar, is_healthy, image)

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSnacks };
