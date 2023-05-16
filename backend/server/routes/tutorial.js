const { tutorialEndpoint, tutorialEndpointRandom, getLastId, getLastRecord } = require("../db/apiData")

exports.tutorialQuestions=(req,res)=>{
    
    tutorialEndpoint()
    .then(data=>{
        console.log(`${req.ip} -> ${req.url}`)
        res.send({data})

    })
    .catch(err=>{
        console.log(err)
        res.send({err:true,msg:'failed fetch tut questions'})
    })
}

exports.randomTutorialQuestions=(req,res)=>{

    let size=parseInt(req.params.number,10)
    tutorialEndpointRandom(size)
    .then(data=>{
        console.log(`${req.ip} -> ${req.url}`)
        res.send({data})

    })
    .catch(err=>{
        console.log(err)
        res.send({err:true,msg:'failed fetch tut questions random'})
    })
}

exports.lastRecordFunc=(req,res)=>{

    getLastRecord()   
    .then(data=>{
        console.log(`${req.ip} -> ${req.url}`)
        res.send({data})

    })
    .catch(err=>{
        console.log(err)
        res.send({err:true,msg:'failed fetch tut questions random'})
    })
}