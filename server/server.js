const express=require('express');
const NLPCloudClient = require('nlpcloud');
const path=require('path')
const dotenv=require('dotenv').config();
const cors=require('cors');

const posParse=require('./db/posParse')

const { parseCSV } = require('./sentences/insertSentence');
const routes=require('./routes/route')

const app=express();
const port=8990;

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.set('case sensitive routing ', true)

// const client = new NLPCloudClient('en_core_web_lg','3af92f6710af69e0174839fbda8f03941d7d2d84')
// Returns an Axios promise with the results.
// In case of success, results are contained in `response.data`. 
// In case of failure, you can retrieve the status code in `err.response.status` 
// and the error message in `err.response.data.detail`.
// parseCSV(path.join(__dirname,'../sentData.csv'))

routes(app);

app.get('/billu',(req,res)=>{
    
      posParse.getSentenceAll()
      .then(sentences=>{
        console.log(sentences);
        res.send(sentences)
      })
      .catch(function (err) {
        console.error(err)
        // console.error(err.response.status);
        // console.error(err.response.data.detail);
      });
    
})

app.listen(port,()=>{
    console.log(`Server running on ${port}...`);
})

module.exports=app;