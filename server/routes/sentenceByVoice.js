const { storeSentence} = require("../db/posParse");
const { getPOSofSentc } = require("../sentences/parts_of_speech");
const { Configuration, OpenAIApi } = require('openai')
const fs = require('fs')
const multer = require('multer');
const path = require("path");
const { getLastId } = require("../db/apiData");

const upload = multer()

const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration);

async function transcribeAudio(filename) {
    const transcript = await openai.createTranscription(
        fs.createReadStream(filename),
        "whisper-1"
    );
    return transcript.data.text;
}




exports.enterSentenceByVoice = async (req, res) => {
    console.log(`${req.ip} -> ${req.url}`)
    // console.log(req.body)
    let posi;
    let lastId=await getLastId()
    const { audio } = req.body
    if (audio) {
        fs.writeFile('sentenceAudio.mp3', audio, { encoding: 'base64' }, (err) => {
            if (!err) {
                console.log('FileCreated');
                audio_file = path.join(__dirname, '../../sentenceAudio.mp3')

                const response = transcribeAudio(audio_file);
                
                response.then(data => {

                    sentence = data
                    console.log(sentence,sentence.length);
                    if(sentence.length===0) throw 'no sente'
                    return sentence;
                })
                    .then(sentence => getPOSofSentc(sentence))
                    .then(posArray => {
                        posi=posArray
                        return storeSentence(lastId+1,sentence, posArray)
                    })
                    .then(msg => {
                        console.log(msg);
                        res.send({sentence,pos:posi})
                    })
                    .catch(err => {
                        console.log(err);
                        return res.send({ err: true, msg: 'No sentence detected' })
                    })
            }
        })

    }else{
        res.send({err:true,msg:'failed due to format'})
    }
}