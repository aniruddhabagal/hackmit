const { parseCSV } = require("../sentences/insertSentence")
const { tutorialQuestions, randomTutorialQuestions } = require("./tutorial")
const path=require('path')
module.exports=(app)=>{
    app.get('/tutorial',tutorialQuestions)

    app.get('/tutorial/:number',randomTutorialQuestions)

}