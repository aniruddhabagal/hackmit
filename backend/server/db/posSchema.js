const mongoose=require('mongoose')

const posSchema=new mongoose.Schema({
    word:String,
    tag:String
})

module.exports={
    posSchema
}