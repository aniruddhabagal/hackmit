const mysql=require('mysql')
const {pool}=require('./dbPool')

exports.storeSentence=(sentence)=>{
    let sql=`INSERT INTO sentences (sentence) values (?)`
    return new Promise((resolve, reject) => {
        pool.getConnection((err,connection)=>{
            if(err) return reject({err:true,msg:'failed conn'});
            
            connection.query(sql,[sentence],(error,data)=>{
                connection.release();
                if(error){
                    return reject({err:true,msg:'failed insert'});
                }else{
                    console.log("Entered");
                    return resolve({data})
                }
            })
        })
        
    })
}

exports.getSentenceAll=()=>{
    let sql=`SELECT * FROM sentences`
    return new Promise((resolve, reject) => {
        pool.getConnection((err,connection)=>{
            if(err) return reject({err:true,msg:'failed conn'});

            connection.query(sql,(error,data)=>{
                connection.release();
                if(error){
                    return reject({err:true,msg:'failed fetch'});
                }else{
                    console.log("fetched");
                    return resolve({data})
                }
            })
        })
    })
}