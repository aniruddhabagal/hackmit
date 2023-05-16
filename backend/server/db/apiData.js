const mongoose=require('mongoose');
const senetences=require('./sentenceSchema')
exports.tutorialEndpoint=()=>{
    
    return new Promise((resolve, reject) => {
        senetences.find({},{_id:0,"pos._id":0}).sort({lineId:1}).limit(20)
        .then(sentences=>{
            resolve(sentences)
        })
        .catch(err=>{
            console.log(err)
            reject(`failed fetch tut qs`)
        })
    })
}
exports.tutorialEndpointRandom=(sizee)=>{
    return new Promise((resolve, reject) => {
        senetences.aggregate([{$sample:{size:sizee}},{$project: {
          _id:0,"pos._id":0
        }}])
        .then(senetences=>resolve(senetences))
        .catch(err=>{
            console.log(err)
            reject('failed fetch random tut qs')
        })
    })
}

exports.getLastId=()=>{
    return new Promise((resolve, reject) => {
        senetences.count()
        .then(msg=>{
            resolve(msg)
        })
        .catch(err=>{
            reject(`failed fetch total count`)
        })
    })
}

exports.getLastRecord=()=>{
    return new Promise((resolve, reject) => {
        senetences.find({}).sort({_id:-1}).limit(1)
        .then(msg=>{
            resolve(msg)
        })
        .catch(err=>{
            reject(`failed fetch last record`)
        })
    })
}