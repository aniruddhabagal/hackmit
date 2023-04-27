const express=require('express');
const NLPCloudClient = require('nlpcloud');

const posParse=require('./db/posParse')
const pool=require('./db/dbPool')
const app=express();
const port=8990;


const client = new NLPCloudClient('en_core_web_lg','3af92f6710af69e0174839fbda8f03941d7d2d84')
// Returns an Axios promise with the results.
// In case of success, results are contained in `response.data`. 
// In case of failure, you can retrieve the status code in `err.response.status` 
// and the error message in `err.response.data.detail`.
client.dependencies('John Doe is a Go Developer at Google').then(function (response) {
    console.log(response.data);
    return posParse.storeSentence('John doe is a go developer at google');
  })
  .then(msg=>{
    console.log('thy msg',msg)
    return posParse.getSentenceAll();
  })
  .then(sentences=>{
    console.log(sentences);
  })
  .catch(function (err) {
    console.error(err)
    // console.error(err.response.status);
    // console.error(err.response.data.detail);
  });


app.listen(port,()=>{
    console.log(`Server running on ${port}...`);
})