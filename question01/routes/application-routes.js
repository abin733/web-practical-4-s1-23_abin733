const express = require("express");
const router = express.Router();

const candidateDao = require("../modules/candidate-dao.js");

// Whenever we navigate to /, render the home view.
router.get("/", async function(req, res) {
    res.render("home");
});

router.get("/getskill", async function(req,res){
    console.log("Get skill call init");
    const skillName = req.query.skill;
    console.log("Git:" + animalName);
    // TODO: call data access function with animalName as paraemeter and return that array of matching animal objects
    const skillsArray = await candidateDao.
    console.log("Animal data:" + JSON.stringify(animalsArray));
    res.locals.animals = animalsArray;
    res.render("animals");

});

module.exports = router;