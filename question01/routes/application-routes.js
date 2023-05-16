const express = require("express");
const router = express.Router();

const candidateDao = require("../modules/candidate-dao.js");

// Whenever we navigate to /, render the home view.
router.get("/", async function(req, res) {
    res.render("home");
});



module.exports = router;