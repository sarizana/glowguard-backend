const express = require("express");
const router = express.Router();
const { getSkincareTips } = require("../controllers/skincareController");

// API endpoint for skincare tips
router.get("/tips", getSkincareTips);

module.exports = router;
