const path=require('path')

const {parseCSV}=require('./server/sentences/insertSentence')
const { removePunctuation } = require('./server/db/posParse')

parseCSV(path.join(__dirname,'sentData.csv'))