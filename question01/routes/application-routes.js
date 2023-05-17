const express = require("express");
const router = express.Router();

const candidateDao = require("../modules/candidate-dao.js");

// Whenever we navigate to /, render the home view.
router.get("/", async function(req, res) {
    const uniqueCountries = await getUniqueCountries();
    res.locals.countries = uniqueCountries;
    res.render("home");
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

router.get("/getcountry", async function(req,res){
    console.log("Get country call init ");
    const yearLow = req.query.yearLow;
    const country = req.query.country;   
    console.log(yearLow + "-:Git: from " + country);
    // TODO: call data access function with animalName as paraemeter and return that array of matching animal objects
    const countryArray = await candidateDao.getByYearsCountry(yearLow,country);
    console.log("Years data:" + JSON.stringify(countryArray));
    res.locals.countries = countryArray;
    res.render("countries");
});

function getUniqueCountries() {

    const allcountries = candidateDao.getAllCountries();
    return allcountries;
}

module.exports = router;