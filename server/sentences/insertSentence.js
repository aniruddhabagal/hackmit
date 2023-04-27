const fs=require('fs')

const posParse=require('../db/posParse')

exports.parseCSV=(filePath)=>{
    posParse.storeSentence('This is sentence number one')
    .then(response=>{
        console.log(response)
    })
    .catch(err=>{
        console.log(err);
    })
}

