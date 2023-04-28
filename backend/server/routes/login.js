exports.loginFunc=(req,res)=>{
    const {username,password}=req.body;
    
    if((username==='user1')&&(password==='12345')){
        res.status(200).send({success:true})
    }
    else res.status(403).send({success:false})
}