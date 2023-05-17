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
    console.log("Git:" + skillName);
    // TODO: call data access function with animalName as paraemeter and return that array of matching animal objects
    const skillsArray = await candidateDao.getSkillsByName(skillName);
    console.log("Skills data:" + JSON.stringify(skillsArray));
    res.locals.skills = skillsArray;
    res.render("skills");
});

module.exports = router;