const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const dbLink=`mongodb://localhost`
const dbName=`hackmitten`
const dbConn = mongoose.connect(dbLink, {
    autoIndex: true,
    dbName
})

dbConn.then(() => {
    console.log('DB Connected')
})
dbConn.catch((err) => {
    console.log(dbLink)
    console.log(`- - - - - - - - - - - - - Couldn't Connect to Database- - - - - - - - - - - - - -\n`)
    console.log(err)
})

// module.exports=mongoClient
module.exports = dbConn
