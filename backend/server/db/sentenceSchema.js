const mongoose=require('mongoose')
const {posSchema}=require('./posSchema')
const sentenceSchema=new mongoose.Schema({
    lineId:Number,
    sentence:String,
    pos:[posSchema]
})

const sentences = mongoose.model('sentences', sentenceSchema)

module.exports=sentences;