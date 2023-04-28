const { parseCSV } = require("../sentences/insertSentence")
const { loginFunc } = require("./login")
const { enterSentenceByVoice } = require("./sentenceByVoice")
<<<<<<< HEAD
const { tutorialQuestions, randomTutorialQuestions, lastRecordFunc } = require("./tutorial")
=======
const { tutorialQuestions, randomTutorialQuestions } = require("./tutorial")
>>>>>>> a4d721361e00800ff848c5b1e18fa60e9d2788e4
const path=require('path')
const multer=require('multer')

const upload=multer()
module.exports=(app)=>{
    app.get('/tutorial',tutorialQuestions)

    app.get('/tutorial/:number',randomTutorialQuestions)

    app.post('/login',loginFunc)

    app.post('/sentenceByVoice',upload.any('file'),enterSentenceByVoice)
<<<<<<< HEAD

    app.get('/lastrecord',lastRecordFunc)
=======
>>>>>>> a4d721361e00800ff848c5b1e18fa60e9d2788e4
}