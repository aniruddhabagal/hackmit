const { storeSentence } = require("../db/posParse");
const { getPOSofSentc } = require("../sentences/parts_of_speech");

exports.enterSentenceByVoice=(req,res)=>{
    const {sentence}=req.body;
    if(sentence){
        getPOSofSentc(sentence)
    .then(posArray=>{
        return storeSentence('',sentence,posArray)
    })
    .then(msg=>{
        console.log(msg);
        res.send(`entered ${sentence}`)
    })
    .catch(err=>{
        console.log(err);
        res.send({err:true,msg:'failed enter voice sentnce'})
    })
    }else{
        res.send({err:true,msg:':('})
    }
}