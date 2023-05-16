const { parseCSV } = require("../sentences/insertSentence")
const { loginFunc } = require("./login")
const { enterSentenceByVoice } = require("./sentenceByVoice")
const { tutorialQuestions, randomTutorialQuestions, lastRecordFunc } = require("./tutorial")
const path=require('path')
const multer=require('multer')

const upload=multer()
module.exports=(app)=>{
    app.get('/tutorial',tutorialQuestions)

    app.get('/tutorial/:number',randomTutorialQuestions)

    app.post('/login',loginFunc)

    app.post('/sentenceByVoice',upload.any('file'),enterSentenceByVoice)

    app.get('/lastrecord',lastRecordFunc)
}