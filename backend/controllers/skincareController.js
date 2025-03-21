const pool = require("../config/db");

// Fetch skincare tips from the database
const getSkincareTips = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM skincare_tips");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = { getSkincareTips };
