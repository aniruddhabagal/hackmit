const { parseCSV } = require("../sentences/insertSentence")
const { loginFunc } = require("./login")
const { enterSentenceByVoice } = require("./sentenceByVoice")
const { tutorialQuestions, randomTutorialQuestions } = require("./tutorial")
const path=require('path')
module.exports=(app)=>{
    app.get('/tutorial',tutorialQuestions)

    app.get('/tutorial/:number',randomTutorialQuestions)

    app.post('/login',loginFunc)

    app.post('/sentenceByVoice',enterSentenceByVoice)
}