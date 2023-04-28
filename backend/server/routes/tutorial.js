<<<<<<< HEAD
const { tutorialEndpoint, tutorialEndpointRandom, getLastId, getLastRecord } = require("../db/apiData")
=======
const { tutorialEndpoint, tutorialEndpointRandom } = require("../db/apiData")
>>>>>>> a4d721361e00800ff848c5b1e18fa60e9d2788e4

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
<<<<<<< HEAD
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
=======
>>>>>>> a4d721361e00800ff848c5b1e18fa60e9d2788e4
}