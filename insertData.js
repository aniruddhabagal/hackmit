const path=require('path')

const {parseCSV}=require('./server/sentences/insertSentence')

parseCSV(path.join(__dirname,'sentData.csv'))
