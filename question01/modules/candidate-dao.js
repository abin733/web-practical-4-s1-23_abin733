const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getBySkill(name){

    console.log("call getBySkill function in candidate-dao.js");
    const db = await dbPromise;

    const skillsArray = await db.all(SQL`
        SELECT * FROM CANDIDATE_DATA
            WHERE skill = ${name}
    `)
    console.log(JSON.stringify(skillsArray));
    return skillsArray;
}

async function getByYears(yearLow,yearHigh){

    console.log("call getByYears function in candidate-dao.js");
    const db = await dbPromise;

    const yearsArray = await db.all(SQL`
        SELECT * FROM CANDIDATE_DATA
            WHERE years_experience BETWEEN ${yearLow} AND ${yearHigh}
    `)
    console.log(JSON.stringify(yearsArray));
    return yearsArray;
}

async function getByYearsCountry(yearLow,country){

    console.log("call getByYears function in candidate-dao.js");
    const countryName = `"'"+ ${country} +"'"`;
    const db = await dbPromise;
    console.log(`SELECT * FROM CANDIDATE_DATA WHERE years_experience > ${yearLow} AND country = "${country}"`);
    const countryArray = await db.all(SQL`SELECT * FROM CANDIDATE_DATA 
    WHERE years_experience > ${yearLow} AND country = ${countryName}`)
    console.log(JSON.stringify(countryArray));
    return countryArray;
}

async function getAllCountries(){

    console.log("call getAllCountries function in candidate-dao.js");
    const db = await dbPromise;

    const allcountries = await db.all(SQL`
    SELECT DISTINCT country FROM CANDIDATE_DATA
    `)
    console.log(JSON.stringify(allcountries));
    return allcountries;
}

// Export functions.
module.exports = {
    getBySkill,
    getByYears,
    getByYearsCountry,
    getAllCountries
};

