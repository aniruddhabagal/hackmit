const mongoose = require('mongoose')
const sentences = require('./sentenceSchema')

exports.storeSentence = async (id, newSentence,posArray) => {
    const lastId=await this.getLastId();
    return new Promise((resolve, reject) => {
        const sentence = new sentences({
            lineId: id,
            sentence:newSentence,
            pos:posArray
        })
        sentence.save()
            .then(msg => {
                // console.log(msg);
                resolve(`Entered sentence`)
            })
            .catch(err => {
                console.log('sds',err);
                reject(`failed enter sentences`)
            })

    })
}

exports.storePOS = (data, sentenceId) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        sentences.findOneAndUpdate(
            {
                lineId: sentenceId
            }, 
            {
                $push: {
                    pos: data
                }
            }
        )
        .then(msg=>{
            console.log(msg)
            resolve(`enterd pos`)
        })
        .catch(err=>{
            console.log(err);
            reject(`failed enter pos`)
        })
    })
}

exports.getSentenceAll = () => {
    let sql = `SELECT * FROM sentences`
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) return reject({ err: true, msg: 'failed conn' });

            connection.query(sql, (error, data) => {
                connection.release();
                if (error) {
                    return reject({ err: true, msg: 'failed fetch' });
                } else {
                    console.log("fetched");
                    return resolve({ data })
                }
            })
        })
    })
}

exports.removePunctuation=()=>{
    return new Promise((resolve, reject) => {
        sentences.updateMany({},{'$pull': {'pos': {'word': '.'}}},{multi:true})
        .then(msg=>{
            console.log('removed full stop')
            resolve(`Removed full stops`)
        })
        .catch(err=>{
            reject(`Failed removeing full stop`)
        })
    })
}

