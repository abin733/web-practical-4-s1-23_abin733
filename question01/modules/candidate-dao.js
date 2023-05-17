const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getSkillsByName(name){

    console.log("call getSkillsByName fucntion in candidate-dao.js");
    const db = await dbPromise;

    const skillsArray = await db.all(SQL`
        SELECT * FROM CANDIDATE_DATA
            WHERE skill = ${name}
    `)
    console.log(JSON.stringify(skillsArray));
    return skillsArray;
}

// Export functions.
module.exports = {
    getSkillsByName
};

