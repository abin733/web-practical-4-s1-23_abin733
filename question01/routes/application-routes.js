const express = require("express");
const router = express.Router();

const candidateDao = require("../modules/candidate-dao.js");

// Whenever we navigate to /, render the home view.
router.get("/", async function(req, res) {
    const uniqueCountries = getUniqueCountries().sort();
    res.render("home",{countries: uniqueCountries});
});

router.get("/getskill", async function(req,res){
    console.log("Get skill call init");
    const skillName = req.query.skill;
    console.log("Git:" + skillName);
    // TODO: call data access function with animalName as paraemeter and return that array of matching animal objects
    const skillsArray = await candidateDao.getBySkill(skillName);
    console.log("Skills data:" + JSON.stringify(skillsArray));
    res.locals.skills = skillsArray;
    res.render("skills");
});

router.get("/getyear", async function(req,res){
    console.log("Get year call init ");
    const yearLow = req.query.yearLow;
    const yearHigh = req.query.yearHigh;   
    console.log(yearLow + "-:Git:>" + yearHigh);
    // TODO: call data access function with animalName as paraemeter and return that array of matching animal objects
    const yearsArray = await candidateDao.getByYears(yearLow,yearHigh);
    console.log("Years data:" + JSON.stringify(yearsArray));
    res.locals.years = yearsArray;
    res.render("years");
});

function getUniqueCountries() {

    const countries = candidateDao.getAllCountries();
    return [...new Set(countries)];
}

module.exports = router;