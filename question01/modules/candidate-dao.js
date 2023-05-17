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

// Export functions.
module.exports = {
    getBySkill,
    getByYears
};

